const router = require('express').Router();

// import locals
const messageRouter = require('./messages-routes');
const authRouter = require('./auth');
const chatRouter = require('./chat-routes');
const createUserRouter = require('./create_user-routes');

//Establish routing path
router.use('/', messageRouter);
router.use('/auth', authRouter);
router.use('/createUser', createUserRouter);
router.use('/chat', chatRouter);
// router.use('/', userRouter);

module.exports = router;
