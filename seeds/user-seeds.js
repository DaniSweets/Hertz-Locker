const bcrypt = require('bcrypt');
const User = require('../models/User');
const sequelize = require('../config/connection');

const userData = [
  {
    name: 'Manager User',
    email: 'manager@example.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'manager',
  },
  {
    name: 'Client User',
    email: 'client@example.com',
    password: bcrypt.hashSync('password456', 10),
    role: 'client',
  },
  ///////////////////////// This is where we add more users to the database
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;