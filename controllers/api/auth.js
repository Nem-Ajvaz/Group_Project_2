const router = require('express').Router();
const { User } = require('../../models');

router.post('/signin', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({
      where: { display_name: req.body.username }
    });

    console.log('userData', userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // const validPassword = await userData.checkPassword(req.body.password);

    // console.log('validPassword', validPassword);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect username or password, please try again' });
    //   return;
    // }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
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
