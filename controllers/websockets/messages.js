function initMessagesSocket(socket, io) {
  socket.on('newMessage', msg => {
    console.log('message', msg);
    socket.broadcast.emit('message', msg); // Needs to be a broadcast so the user doesnt see their message twice.
  });
}

module.exports = { initMessagesSocket };
