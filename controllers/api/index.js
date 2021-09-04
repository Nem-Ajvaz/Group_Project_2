// import packages
const router = require('express').Router();

// import locals
// const messageRouter = require('./messages');

// router.use('/', messageRouter);

router.use('/');

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
