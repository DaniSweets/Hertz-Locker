const router = require('express').Router();
const User = require('../../../models/User');
const authenticateUser = require('../../authController');
const bcrypt = require('bcrypt');

// User login
router.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    const userData = await User.findOne({ where: { email: req.body.username } });
    let userPw = userData.getDataValue("password");
    const validPassword = await bcrypt.compare(req.body.password, userPw);

    console.log(`isValidPassword: ${validPassword}`);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log('saving session')
    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Create a new user
router.post('/register', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ success: true, data: userData });
    });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Registration failed', details: error.message });
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy();
      //() => {
    //   // res.status(204).end();
    
    // });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
