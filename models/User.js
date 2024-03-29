const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

User = sequelize.define('User',
  {
    // Define the user model attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    role: {
      // Define a role field with ENUM values ('manager' and 'client')
      type: DataTypes.ENUM('manager', 'client'), 
      allowNull: false,
      defaultValue: 'client', // Set a default role to 'client' if not specified
    },
  },
  {
    // Hooks for executing actions before creating or updating a user
    hooks: {
      // Hash the user's password before creating a new user
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // Hash the user's password before updating an existing user
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize, // Connect to the Sequelize instance
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, 
    modelName: 'user', // Set the model name
  }
);

module.exports = User; // Export the User model for use in other files