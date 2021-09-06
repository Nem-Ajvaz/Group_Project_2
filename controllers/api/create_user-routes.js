const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  User.create({
    ...req.body
  })
    .then(userData => {
      req.session.save(() => {
        req.session.username = userData.username;
        req.session.password = userData.password;
        req.session.email = userData.email;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });
    })

    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
