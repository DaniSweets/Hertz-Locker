const express = require('express');
const router = express.Router();
const Equipment = require('../models/equipment');

// Route to fetch available equipment for users

router.get('/available-equipment', async (req, res) => {
  try {
    // Fetch available equipment from the database

    const availableEquipment = await Equipment.findAll({ where: { status: 'available' } });

    // Send the data as JSON response
    
    res.json(availableEquipment);
  } catch (error) {
    console.error('Error fetching available equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;