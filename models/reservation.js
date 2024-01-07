const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Date and time when the reservation starts
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Date and time when the reservation ends
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Additional fields for reservation details
  bandName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Equipment reserved for the reservation
  // (You might need to establish associations with the Equipment model)
  equipmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // Status of the reservation (e.g., pending, approved, canceled)
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
  // Manager's notes or comments about the reservation
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // ... (add more attributes as needed)

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
},
{
  sequelize,
  freezeTableName: true,
  modelName: 'reservation'
},
);

module.exports = Reservation;