const express = require('express');
const router = express.Router();
const Equipment = require('../models/equipmentModel');

// Route to fetch equipment availability data
router.get('/equipment-availability', async (req, res) => {
  try {
    // Fetch equipment availability data from the database
    const equipmentAvailabilityData = await Equipment.find();

  
    res.json(equipmentAvailabilityData);
  } catch (error) {
    console.error('Error fetching equipment availability data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
