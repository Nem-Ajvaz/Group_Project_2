const router = require('express').Router();
const { User } = require('../../models');

router.post('/signin', async (req, res) => {
  
    User.findOne({
      where: { username: req.body.username }
    })   
    .then(userData => {
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
    //   const validPassword = dbUserData.checkPassword(req.body.password);

    //   if (!validPassword) {
    //     res.status(400).json({ message: 'Incorrect password!' });
    //     return;
    // }
      req.session.save(() => {

        req.session.user_id = userData.id;
        req.session.logged_in = true;  
        res.json({ user: userData, message: 'You are now logged in!' });
      });

      

    }).catch (err => {
      console.log(err);
      res.status(500).json(err);
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
