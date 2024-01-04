const express = require('express');
const router = express.Router();
const { Equipment } = require('../../../models/equipment');
const authController = require('../../authController');


// Route to fetch available equipment for users
router.get('/available-equipment', authController.authenticateUser, async (req, res) => {
  try {
    // Check if authentication was successful
    if (req.user) {
      // Fetch available equipment from the database
      const availableEquipment = await Equipment.findAll({ where: { status: 'available' } });

      res.json(availableEquipment);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Error fetching available equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all equipment
router.get('/all-equipment', authController.authenticateUser, async (req, res) => {
  try {
    const allEquipment = await Equipment.findAll();
    res.json(allEquipment);
  } catch (error) {
    console.error('Error fetching all equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update equipment
router.put('/update/:id', authController.authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEquipment = await Equipment.update(req.body, { where: { id } });
    res.json(updatedEquipment);
  } catch (error) {
    console.error('Error updating equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete equipment
router.delete('/delete/:id', authController.authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    await Equipment.destroy({ where: { id } });
    res.json({ message: 'Equipment deleted successfully' });
  } catch (error) {
    console.error('Error deleting equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add new equipment
router.post('/add', authController.authenticateUser, async (req, res) => {
  try {
    const newEquipment = await Equipment.create(req.body);
    res.json(newEquipment);
  } catch (error) {
    console.error('Error adding new equipment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch inventory data
router.get('/inventory', authController.authenticateUser, async (req, res) => {
  try {
    // Fetch and return inventory data
    const inventoryData = await Equipment.findAll();
    res.json(inventoryData);
  } catch (error) {
    console.error('Error fetching inventory data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;