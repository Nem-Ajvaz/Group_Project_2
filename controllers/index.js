const router = require('express').Router();
const pagesRouter = require('./html/pages');

router.use('/', pagesRouter);

module.exports = router;
