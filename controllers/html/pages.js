const router = require('express').Router();
const { User } = require('../../models/User');
const { Chat } = require('../../models/Chat');
const { Message } = require('../../models/Message');
const { withAuth } = require('../../utils/withAuth');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.get('/welcome', withAuth, async (req, res) => {
  const data = await User.findAll({
    raw: true,
    where: {
      id: req.session.user_id
    },
    include: [
      {
        model: Chat,
        attributes: ['chat_name']
      }
    ]
  });
  console.log(data);
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
  //console.log(userChats);
  const options = { userChats, session: req.session };
  res.render('welcome', options);
});

router.get('/chat/:id', withAuth, async (req, res) => {
  if (!req.params.id) {
    res.redirect('/welcome');
  }

  const allMessages = await Message.findAll({
    raw: true,
    where: {
      chat_id: req.params.id
    }
  });

  res.render('chat', { allMessages });
});

router.get('*', (req, res) => {
  res.redirect('/welcome');
});

module.exports = router;
