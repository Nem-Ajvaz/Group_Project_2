const router = require('express').Router();
const { Message, Chat } = require('../../models');

// expect the body to have the chat id
//Change name at a later date
router.post('/chatMessage', async (req, res) => {
  try {
    console.log(req.body);
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

    //console.log(findAllMessages);
    res.status(200).json(findAllMessages);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'SOMETHING WENT WRONG' });
  }
});

module.exports = router;

// {
//   "message_id": "9",
//   "message_content": "We got a lot of work done today Woooo Hoooo :(",
//   "chat_id": "1",
//   "sender_id": "1"
// }
