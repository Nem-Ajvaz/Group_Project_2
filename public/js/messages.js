
const socket = io('http://localhost:3001');
const $formElem = $('form');
const $chatNameHeading = $('#chat-name-heading');

//Referencing elements from the HTML
const $messageInput = $('#message-input');
const $messageDetails = $('#messageDetails');

let roomId = window.location.pathname.substring(
  window.location.pathname.lastIndexOf('/') + 1
);
let chatId = parseInt(roomId);

function formatDate(date) {
  return moment(date).format('h:mm a');
}

// const chatRoomName = await fetch('/api/chatName', {
//   method: 'POST',
//   body: JSON.stringify({ chatId }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
// const existingChatRooms = await chatRoomName.json();
// console.log(existingChatRooms);

socket.on('connect', () => {
  const dataAsString = formatDate(Date.now());

  console.log(`A new user has joined the chat with socket id ${socket.id}`);
  let user = socket.id;

  socket.emit('addUser', user); // only to room

  $formElem.on('submit', e => {
    e.preventDefault();

    const messageValue = $messageInput.val().trim();

    // TODO: replace with dynamic values
    socket.emit('newMessage', {
      message_content: messageValue,
      chat_id: chatId
    });

    // if its an empty string, end here.
    if (messageValue === '') return;

    const $userMessage = $('<p>');
    const $userSendDetails = $('<p>');

    $userSendDetails.text('Sent at ' + dataAsString);
    $userMessage.addClass('owner-message');
    $userSendDetails.addClass('owner-timestap'); //Class needs to be different between the message sent.

    $userMessage.text(messageValue);
    $messageDetails.append($userMessage);
    $messageDetails.append($userSendDetails);

    $messageInput.val('');
  });

  //listenner for a message being sent
  socket.on('message', data => {
    if (data.chat_id === chatId) {
      const $messageReceived = $('<p>');
      const $userReceiveDetails = $('<p>');

      $userReceiveDetails.text('Received at ' + dataAsString);
      $userReceiveDetails.addClass('guest-timestap');
      $messageReceived.addClass('guest-message'); //Class needs to be different between the message recived.

      $messageReceived.text(data.message_content);
      $messageDetails.append($messageReceived);
      $messageDetails.append($userReceiveDetails);
    }
  });

  socket.on('end', function() {
    socket.disconnect(0);
  });

  socket.on('userRemoved', data => {
    console.log('data', data);
  });
});

$('#go-previous').click(function() {
  window.location.href = '/welcome';
});

//messageDetails
