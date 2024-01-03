const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const reservation = require('../models/reservation');

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  /////////////////////// Details about the reservation
  band: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  /////////////////// Field for equipment needed
  equipmentNeeded: {
    type: DataTypes.STRING, // You can adjust the data type based on your needs
    allowNull: true, // Modify as needed
  },
  ////////////////////////////////// Additional fields for reservation details??????????????????????????
  // ...

  // Timestamps for tracking creation and update times
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Reservation;