const socket = io('http://localhost:4001');

const getId = async obj => {
  const chatroomName = obj.id;
  console.log(chatroomName);
  const sendToChatRoom = await fetch('/api/chatMessage', {
    method: 'POST',
    body: JSON.stringify({ chatroomName }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await sendToChatRoom.json();
  if (response) {
    console.log(response);
    document.location.replace(`/chat/${response}`);
    console.log(response);
  }
  socket.emit('room', { room: response });
};
