const router = require('express').Router();
const { User } = require('../../models');

router.post('/signin', async (req, res) => {
  User.findOne({
    where: { username: req.body.username }
  })
    .then(userData => {
      console.log(userData);
      if (!userData) {
        res.status(400).json({
          message: 'Incorrect username or password, please try again'
        });
        return;
      }
      console.log('testing');
      console.log(req.session);

      req.session.save(() => {
        req.session.id = userData.user_id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    console.log('session has been destroyed');
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
