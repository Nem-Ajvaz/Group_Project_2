const router = require('express').Router();
const { User, Chat, UserChat } = require('../../models');
const withAuth = require('../../utils/withAuth');
const sequelize = require('sequelize');

router.get('/', withAuth, async (req, res) => {
  try {
    const userWithChats = await User.findAll({
      where: {
        user_id: 1
      },
      attributes: ['email'],
      include: [
        {
          model: Chat,
          attributes: ['chat_name']
        }
      ]
    });

    const chats = userWithChats.Chats;

    console.log(chats);
    res.json(chats);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userWithChats = await Chat.findAll({
//       include: [{ model: Chat }]
//     });

//     console.log(userWithChats);
//     res.json(userWithChats);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json(e);
//   }
// });

module.exports = router;

/**
 * select a.chat_name from chat a
 * left join user_chat b on a.chat_id = b.chat_id
 * left join user c on b.user_id = c.user_id
 * where c.email = 'nem@gmail.com';
 *
 */
