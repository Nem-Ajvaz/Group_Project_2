const $createRoom = $('#create-chat');
const $messageInputEle = $('#message-input');

$createRoom.on('submit', async e => {
  e.preventDefault();

  const inputText = $messageInputEle
    .val()
    .toLowerCase()
    .trim();
  console.log(inputText);

  const checkExistingChatRoom = await fetch('/api/createChatRoom/welcome', {
    method: 'POST',
    body: JSON.stringify({ inputText }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const existingChatRooms = await checkExistingChatRoom.json();
  if (existingChatRooms) {
    location.reload();
  }

  console.log(existingChatRooms);
});
