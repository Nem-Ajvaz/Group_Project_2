const router = require('express').Router();
const { User, Chat, UserChat } = require('../../models');
const withAuth = require('../../utils/withAuth');
const sequelize = require('sequelize');

// router.get('/', async (req, res) => {
//   try {
//     console.log('test');
//     const userWithChats = await Chat.findAll({
//       include: [{ model: User }]
//     });

//     console.log(userWithChats);
//     res.json(userWithChats);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json(e);
//   }
// });

router.get('/', async (req, res) => {
  try {
    // const createChat = await UserChat.create({
    //   u_s_e_r_user_id: 1,
    //   c_h_a_t_chat_id: 4,
    //   is_owner: true
    // });

    const result = await UserChat.create({ UserId: 1, ChatId: 1 });

    res.json(createChat);
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
