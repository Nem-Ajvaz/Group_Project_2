const socket = require('socket.io');
const { initAllSockets } = require('./controllers/websockets');

const SOCKET_PORT = process.env.PORT || 3001;

const options = { cors: { origin:"*"}};

function initSocketServer(server) {
  const io = socket(server, options);
  io.on('connection', socket => {
    initAllSockets(socket, io);
  });
  server.listen(SOCKET_PORT, () => {
    console.log(`Socket server listening on PORT: ${SOCKET_PORT}`);
  });
}

module.exports = { initSocketServer };
