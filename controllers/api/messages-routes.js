const router = require('express').Router();
const { Message } = require('../../models');

// expect the body to have the chat id
router.get('/message', async (req, res) => {
  try {
    const findAllMessages = await Message.findAll({});

    const userMessage = findAllMessages.map(message =>
      message.get({ plain: true })
    );

    console.log(userMessage);
    console.log(findAllMessages);
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
