const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const bcrypt = require('bcrypt');

exports.authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check the user's role and return appropriate response
    if (user.role === 'manager') {

      ///// Manager login logic

      res.json({ role: 'manager', message: 'Manager login successful' });
    } else if (user.role === 'client') {

      ///// Client login logic

      res.json({ role: 'client', message: 'Client login successful' });
    } else {
      res.status(401).json({ error: 'Invalid role' });
    }
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = router;