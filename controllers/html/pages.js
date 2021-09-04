const router = require('express').Router();

router.get('/messages', (req, res) => {
  res.render('messages');
});

module.exports = router;
