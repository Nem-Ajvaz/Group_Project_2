
function initChatSocket(socket, io) {
  socket.on('addUser', userdata => {
    console.log(userdata);
    socket.broadcast.emit('userAdded', userdata);
  });

  socket.on('removeUser', userdata => {
    console.log(userdata);
    socket.emit('userRemoved', userdata);
  });
}

module.exports = { initChatSocket };
