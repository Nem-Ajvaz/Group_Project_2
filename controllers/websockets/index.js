// TODO: import all functionality for sockets
const { initMessagesSocket } = require('./messages');
const { initChatSocket } = require('./chats');

function initAllSockets(socket, io) {
  initMessagesSocket(socket, io);
  initChatSocket(socket, io);
}

module.exports = { initAllSockets };
