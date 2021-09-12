const router = require('express').Router();
const { User, Chat, UserChat } = require('../../models');
const withAuth = require('../../utils/withAuth');
const sequelize = require('sequelize');

router.get('/welcome', async (req, res) => {
  try {
    const renderChatRooms = await User.findAll({
      where: { id: 1 },
      include: [{ model: Chat }]
    });

    res.json(renderChatRooms);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = router;
