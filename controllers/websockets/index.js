// TODO: import all functionality for socks
const { initMessagesSocket } = require('./messages');

function initAllSockets(socket, io) {
  initMessagesSocket(socket, io);
}

module.exports = { initAllSockets };
