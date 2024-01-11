const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const authenticateUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Attach the authenticated user to the request
    req.user = user;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = authenticateUser;