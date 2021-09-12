const socket = io('http://localhost:4001');
const $formElem = $('form');

//Referencing elements from the HTML
const $messageInput = $('#message-input');
const $messageDetails = $('#messageDetails');

socket.on('connect', () => {
  function formatDate(date) {
    return moment(date).format('h:mm a');
  }

  const dataAsString = formatDate(Date.now());

  console.log(`A new user has joined the chat with socket id ${socket.id}`);
  let user = socket.id;

  socket.emit('addUser', user); // only to room

  $formElem.on('submit', e => {
    e.preventDefault();

    const messageValue = $messageInput.val().trim();

    let roomId = window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1
    );
    let chatId = parseInt(roomId);
    // TODO: replace with dynamic values
    socket.emit('newMessage', {
      message_content: messageValue,
      chat_id: chatId
      // sender_id: //req
    });

    // if its an empty string, end here.
    if (messageValue === '') return;

    const $userMessage = $('<p>');
    const $userSendDetails = $('<p>');

    $userSendDetails.text('Received at ' + dataAsString);
    $userMessage.addClass('owner-message');
    $userSendDetails.addClass('owner-timestap'); //Class needs to be different between the message sent.

    $userMessage.text(messageValue);
    $messageDetails.append($userMessage);
    $messageDetails.append($userSendDetails);
  });

  //listenner for a message being sent
  socket.on('message', data => {
    console.log(data.message_content);
    const $messageReceived = $('<p>');
    const $userReceiveDetails = $('<p>');

    $userReceiveDetails.text('Received at 9:12');
    $userReceiveDetails.addClass('guest-timestap');
    $messageReceived.addClass('guest-message'); //Class needs to be different between the message recived.

    $messageReceived.text(data.message_content);
    $messageDetails.append($messageReceived);
    $messageDetails.append($userReceiveDetails);
  });

  socket.on('userAdded', data => {
    const newUser = $('<p>');
    newUser.text(`New user: ${data} has joined the chat`);
    newUser.addClass('user-joined');
    $messageDetails.append(newUser);
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

$(document).ready(async () => {
  const response = await fetch('/api/messages');
  const messageHistory = await response.json();
  //console.log(messageHistory);
  if (!messageHistory) {
    return;
  } else {
    for (let i = 0; i < messageHistory.length; i++) {
      if (messageHistory[i].sender_id === 1) {
        //content
        const $historyChat = $('<p>');
        $historyChat.text(messageHistory[i].message_content);
        $historyChat.addClass('owner-message');
        $messageDetails.append($historyChat);
        //timestamp
        const $historyTimestamp = $('<p>');
        $historyTimestamp.text(messageHistory[i].created_at.toString());
        $historyTimestamp.addClass('owner-timestap');
        $messageDetails.append($historyTimestamp);
      } else {
        //content
        const $historyChat = $('<p>');
        $historyChat.text(messageHistory[i].message_content);
        $historyChat.addClass('guest-message');
        $messageDetails.append($historyChat);

        //timestamp
        const $historyTimestamp = $('<p>');
        $historyTimestamp.text(messageHistory[i].created_at.toString());
        $historyTimestamp.addClass('guest-timestap');
        $messageDetails.append($historyTimestamp);
      }
    }
  }

  console.log(messageHistory.length);
  // console.log(messageHistory);
});
