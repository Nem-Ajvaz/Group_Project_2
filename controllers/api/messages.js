const router = require('express').Router();

// expect the body to have the chat id
router.get('/message', async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'SOMETHING WENT WRONG' });
  }
});

module.exports = router;
