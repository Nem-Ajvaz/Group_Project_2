const socket = require('socket.io');
const { initAllSockets } = require('./controllers/websockets');

const SOCKET_PORT = process.env.PORT || 3001;

function initSocketServer(server) {
  const io = socket(server, {
    cors: {
      // allowing all urls to access
      origin: 'http://localhost:3001',
      methods: ['GET', 'POST']
    }
  });
  io.on('connection', socket => {
    initAllSockets(socket, io);
  });
  server.listen(SOCKET_PORT, () => {
    console.log(`Socket server listening on PORT: ${SOCKET_PORT}`);
  });
}

module.exports = { initSocketServer };
