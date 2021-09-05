const { Message } = require('../../models/Message');

function initMessagesSocket(socket, io) {
  socket.on('newMessage', async msg => {
    try {
      const createMessage = await Message.create(msg);
      socket.broadcast.emit('message', createMessage.get({ plain: true })); // Needs to be a broadcast so the user doesnt see their message twice.
    } catch (e) {
      console.log(e);
    }
    console.log('message', msg);
  });
}

module.exports = { initMessagesSocket };
