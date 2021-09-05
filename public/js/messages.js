const $formElem = $('form');
const socket = io('http://localhost:4001');
// const { messageFormat } = require('../../utils/message-helper.js');

//Referencing elements from the HTML
const $messageInput = $('#message-input');
const $messageDetails = $('#messageDetails');

socket.on('connect', () => {
  console.log(`A new user has joined the chat with socket id ${socket.id}`);
  let user = socket.id;

  // x8WIv7-mJelg7on_ALbx
  socket.emit('addUser', user);

  $formElem.on('submit', e => {
    e.preventDefault();

    const messageValue = $messageInput.val().trim();

    socket.emit('newMessage', messageValue);

    // if its an empty string, end here.
    if (messageValue === '') return;

    const $userMessage = $('<p>'); //for message
    const $userSendDetails = $('<p>');
    $userSendDetails.text('Nem sent a message at 9:12');
    $userSendDetails.addClass('message-info'); //needs to be added to the css.
    $userMessage.text(messageValue);

    // console.log($userMessage);
    $messageDetails.append($userSendDetails);
    $messageDetails.append($userMessage);
  });

  //listenner for a message being sent
  socket.on('message', data => {
    // Pick up the message sent
    // logs to console
    console.log(data);

    const $userReceiveDetails = $('<p>');
    const $messageReceived = $('<p>');

    $userReceiveDetails.text('Message received at 9:12');
    $userReceiveDetails.addClass('message-info'); //needs to be added to the css.

    $messageReceived.text(data);
    // console.log($userMessage);
    $messageDetails.append($userReceiveDetails);
    $messageDetails.append($messageReceived);
  });

  socket.on('userAdded', data => {
    console.log('data', data);
    const newUser = $('<p>');
    newUser.text(`New user: ${data} has joined the chat`);
    $messageDetails.append(newUser);
  });

  socket.on('end', function() {
    socket.disconnect(0);
  });

  socket.on('userRemoved', data => {
    console.log('data', data);
  });
});
