// import packages
const router = require('express').Router();

// import locals
const messageRouter = require('./messages-routes');
// const chatRouter = require('./chat-routes');
// const userRouter = require('./user-routes');
// const authRouter = require('./auth-routes');

//Establish routing path
router.use('/', messageRouter);
// router.use('/', chatRouter);
// router.use('/', userRouter);
// router.use('/', authRouter);

module.exports = router;
/**
 * routes
 * auth
 *  -- login
 *  -- signup
 *  -- get all chat groups
 *  -- get all messages for chat groups //
 *  -- get new chat room
 *  -- remove chat room
 *
 * sockets
 *  -- use sockets for creating new messages
 */
