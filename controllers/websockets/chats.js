/**
 * adding new user
 * removing user
 */

function initChatSocket(socket, io) {
  socket.on('addUser', data => {
    // TODO: add that user to the chat table
    io.broadcast.emit('userAdded', { data });
  });

  socket.on('removeUser', data => {
    io.broadcast.emit('userRemoved', { data });
  });
}

module.exports = { initChatSocket };
