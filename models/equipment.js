const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Equipment = sequelize.define('Equipment', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Name of the equipment
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Current status of the equipment (e.g., available, reserved, in-use)
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Additional fields for equipment details
  model: {
    type: DataTypes.STRING,
    allowNull: true,
  },

    // Manufacturer of the equipment
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  
    // Purchase date of the equipment
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  
    // Condition of the equipment (e.g., new, used, refurbished)
    condition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  
    // Additional details or notes about the equipment
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

  ////////////////////////////// What other fields are we wanting to add?????????????????????

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

module.exports = Equipment;
