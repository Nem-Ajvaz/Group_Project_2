const router = require('express').Router();
const { User } = require('../../models/User');
const { Chat } = require('../../models/Chat');
const { Message } = require('../../models/Message');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/welcome', async (req, res) => {
  const data = await User.findAll({
    raw: true,
    where: {
      id: '1'
    },
    include: [
      {
        model: Chat,
        attributes: ['chat_name']
      }
    ]
  });
  const userChats = data.map(chat => {
    Object.keys(chat).map(key => {
      if (key.includes('.')) {
        const index = key.lastIndexOf('.');
        if (index !== -1) {
          const newKey = key.substr(index + 1);
          chat[newKey] = chat[key];
        }
      }
      return chat;
    });
    return chat;
  });
  res.render('welcome', { userChats });
});

router.get('/chat/:id', async (req, res) => {
  if (!req.params.id) {
    res.redirect('/welcome');
  }

  console.log(req.params.id);

  const allMessages = await Message.findAll({
    where: {
      chat_id: req.params.id
    },
    raw: true
  });

  console.log('allMessages', allMessages);
  res.render('chat', { allMessages });
});

router.get('*', (req, res) => {
  res.redirect('/welcome');
});

module.exports = router;
