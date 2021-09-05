function initMessagesSocket(socket, io) {
  socket.on('newMessage', msg => {
    console.log('message', msg);
    io.emit('chatMessage', msg);
  });
}

module.exports = { initMessagesSocket };
