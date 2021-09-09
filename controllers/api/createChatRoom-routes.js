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

router.get('/welcome', async (req, res) => {
  try {
    
    const renderChatRooms = await Chat.findAll({});  
    
    console.log(renderChatRooms);
    
    res.json(renderChatRooms);
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
