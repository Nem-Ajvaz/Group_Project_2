const router = require('express').Router();


router.get ('/', (req, res) => {
  res.render ('homepage');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/signin', (req, res) => {
  // This section will be uncommented when we implement authentication

  // if (req.session.loggedIn) {
  // res.redirect('/welcome');
  //   return;
  // }
  res.render('signin');
});

router.get('/welcome', (req, res) => {

   // if (req.session.loggedIn) {
  // res.redirect('/signin');
  //   return;
  // }
  res.render('welcome');
});

router.get('/messages', (req, res) => {
  res.render('messages');
});

module.exports = router;
