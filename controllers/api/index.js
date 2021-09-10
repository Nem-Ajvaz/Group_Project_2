const router = require('express').Router();

// import locals
const messageRouter = require('./messages-routes');
const authRouter = require('./auth');
const createChatRoomRouter = require('./createChatRoom-routes')
const chatRoomListRouter = require('./existingChatRooms-routes');
const createUserRouter = require('./create_user-routes');

//Establish routing path
router.use('/', messageRouter);
router.use('/auth', authRouter);
router.use('/createUser', createUserRouter);
router.use('/existingChatRoom', chatRoomListRouter);
router.use('/createChatRoom',createChatRoomRouter);


module.exports = router;
