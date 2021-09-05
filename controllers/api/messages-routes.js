const router = require('express').Router();
const { Message } = require('../../models');

// expect the body to have the chat id
router.get('/message', async (req, res) => {
  try {
    const findAllMessages = await Message.findAll();
    res.status(200).json(findAllMessages);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'SOMETHING WENT WRONG' });
  }
});

module.exports = router;
