const $formElem = $('form');
const socket = io('http://localhost:4001');

//Referencing elements from the HTML
const $messageInput = $('#message-input');
const $messageDetails = $('#messageDetails');

socket.on('connect', () => {
  console.log(`A new user has joined the chat with socket id ${socket.id}`);
  let user = socket.id;

  socket.emit('addUser', user);

  $formElem.on('submit', e => {
    e.preventDefault();

    const messageValue = $messageInput.val().trim();

    // TODO: replace with dynamic values
    socket.emit('newMessage', {
      message_content: messageValue,
      chat_id: '1',
      sender_id: '1'
    });

    // if its an empty string, end here.
    if (messageValue === '') return;

    const $userMessage = $('<p>');
    const $userSendDetails = $('<p>');

    $userSendDetails.text('Nem sent a message at 9:12');
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
