const $formElem = $('form');

const $messageInput = $('#message-input');

$formElem.on('submit', e => {
  e.preventDefault();

  const messageValue = $messageInput.val().trim();

  if (messageValue === '') return;

  // do the socket stuff here
});
