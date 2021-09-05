const router = require('express').Router();
const pagesRouter = require('./html/pages');
const apiRouter = require('./api');

router.use('/', pagesRouter);
router.use('/api', apiRouter);

module.exports = router;
