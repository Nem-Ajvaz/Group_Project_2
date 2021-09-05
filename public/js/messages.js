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
    //Message Sender
    e.preventDefault();

    const messageValue = $messageInput.val().trim();

    socket.emit('newMessage', {
      message_content: messageValue,
      chat_id: '1',
      sender_id: '1'
    });

    // if its an empty string, end here.
    if (messageValue === '') return;

    const $userMessage = $('<p>'); //for message
<<<<<<< Updated upstream
    // const $userSendDetails = $('<p>');
    // $userSendDetails.text('Nem sent a message at 9:12');
    // $userSendDetails.addClass('message-info'); //needs to be added to the css.
=======
    const $userSendDetails = $('<p>');
    $userSendDetails.text('Nem sent a message at 9:12');
    $userMessage.addClass('owner-message');
    $userSendDetails.addClass('owner-message'); //Class needs to be different between the message sent.
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    $userMessage.text(messageValue);

    // console.log($userMessage);
    $messageDetails.append($userMessage);
    $messageDetails.append($userSendDetails);
  });

  //listenner for a message being sent
  socket.on('message', data => {
    //Message Recipient
    // Pick up the message sent
    // logs to console
    console.log(data);

    // const $userReceiveDetails = $('<p>');
    const $messageReceived = $('<p>');

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< HEAD
    // $userReceiveDetails.text('Message received at sent a message at 9:12');
    // $userSendDetails.addClass('message-info'); //needs to be added to the css.
=======
    $userReceiveDetails.text('Message received at 9:12');
    $userReceiveDetails.addClass('message-info'); //needs to be added to the css.
>>>>>>> e86f44e8e11f1677565ec516ebc196574e9770ce
=======
    $userReceiveDetails.text('Received at 9:12');
    $userReceiveDetails.addClass('guest-message');
    $messageReceived.addClass('guest-message'); //Class needs to be different between the message recived.
>>>>>>> Stashed changes
=======
    $userReceiveDetails.text('Received at 9:12');
    $userReceiveDetails.addClass('guest-message');
    $messageReceived.addClass('guest-message'); //Class needs to be different between the message recived.
>>>>>>> Stashed changes

    $messageReceived.text(data);
    // console.log($userMessage);
    $messageDetails.append($messageReceived);
    $messageDetails.append($userReceiveDetails);
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
