
const socket = io('https://mysterious-bastion-78954.herokuapp.com/');

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
