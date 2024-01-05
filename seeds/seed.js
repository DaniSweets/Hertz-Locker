const seedUsers = require('./user-seeds');
const seedEquipment = require('./equipment-seeds');
const seedReservations = require('./reservation-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  // await seedUsers();
  await seedEquipment();
  await seedReservations();
  
  //////////////////// Add more seed functions as needed
};

seedAll();
