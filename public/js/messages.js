const $formElem = $('form');
const socket = io('http://localhost:4001');

socket.on('connect', () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

const $messageInput = $('#message-input');

$formElem.on('submit', e => {
  e.preventDefault();

  const messageValue = $messageInput.val().trim();

  // if its an empty string, end here.
  if (messageValue === '') return;

  socket.emit('newMessage', messageValue);
});

// TODO: append a message when the user sends a new one
