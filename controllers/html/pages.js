const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/welcome', (req, res) => {
  res.render('welcome');
});

router.get('/chat/:id', (req, res) => {
  res.render('chat');
});

module.exports = router;
