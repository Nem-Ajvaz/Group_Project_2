const router = require('express').Router();
const { Message, Chat } = require('../../models');

// expect the body to have the chat id
//Change name at a later date
router.post('/chatMessage', async (req, res) => {
  try {
    const findMessageChatId = await Chat.findAll({
      raw: true,
      where: { chat_name: req.body.chatroomName }
    });

    console.log(findMessageChatId[0].id);

    res.status(200).json(findMessageChatId[0].id);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'SOMETHING WENT WRONG' });
  }
});

router.get('/messages', async (req, res) => {
  try {
    const findAllMessages = await Message.findAll({});

    res.status(200).json(findAllMessages);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'SOMETHING WENT WRONG' });
  }
});

router.get('chatName', async (req, res) => {
  try {
    console.log('this has been hit');
    const chatName = await Chat.findByPk({
      where: { chat_id: req.body.chatId }
    });
    res.status(200).json(chatName);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'SOMETHING WENT WRONG' });
  }
});

module.exports = router;
