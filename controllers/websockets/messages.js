const { Message } = require('../../models/Message');
const { Chat } = require('../../models/Chat');

let messagesInit = false;

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

// const { Message, Chat } = require('../../models/Message');

// function initMessagesSocket(socket, io) {
//   socket.on('newMessage', async msg => {
//     try {
//       const createMessage = await Message.create(msg);
//       socket.broadcast.emit('message', createMessage.get({ plain: true })); // Needs to be a broadcast so the user doesnt see their message twice.
//     } catch (e) {
//       //console.log(e);
//     }
//     //console.log('message', msg);
//   });

//   socket.on('joinRoom', async chat_id => {
//     console.log('This is ' + socket.id);
//     try {
//       const chatId = await Chat.get(chat_id);

//       const user = userJoin(socket.id, chatId);

//       socket.join(user.chatroomName);
//     } catch (err) {
//       console.log(err);
//     }
//   });
// }

// module.exports = { initMessagesSocket };
