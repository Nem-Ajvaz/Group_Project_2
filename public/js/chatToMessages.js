const socket = io('http://localhost:3001');

const getId = async obj => {
  const chatroomName = obj.id;

  const sendToChatRoom = await fetch('/api/chatMessage', {
    method: 'POST',
    body: JSON.stringify({ chatroomName }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await sendToChatRoom.json();
  if (response) {
    document.location.replace(`/chat/${response}`);
  }
  socket.emit('room', { room: response });
};
