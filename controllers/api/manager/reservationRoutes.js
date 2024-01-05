const express = require('express');
const router = express.Router();
const Reservation= require('../../../models/reservation');
const authController = require('../../authController');


// Middleware to check if the user is a manager
const isManager = (req, res, next) => {
  if (req.user && req.user.role === 'manager') {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
};

// Route for fetching all reservations (accessible only by managers)
router.get('/all-reservations', authController, isManager, async (req, res) => {
  try {
    const allReservations = await Reservation.findAll();
    res.json(allReservations);
  } catch (error) {
    console.error('Error fetching all reservations from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for fetching personal reservations (accessible by both managers and clients)
router.get('/personal-reservations', authController, async (req, res) => {
  const userId = req.user.id; // Assuming user ID is stored in req.user

  try {
    const personalReservations = await Reservation.findAll({ where: { userId } });
    res.json(personalReservations);
  } catch (error) {
    console.error('Error fetching personal reservations from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for adding a new reservation (accessible by both managers and clients)
router.post('/add-reservation', authController, async (req, res) => {
  const { startTime, endTime, bandName, equipmentId, notes } = req.body;
  const userId = req.user.id; // Assuming user ID is stored in req.user

  try {
    const newReservation = await Reservation.create({
      startTime,
      endTime,
      bandName,
      equipmentId,
      notes,
      userId,
    });
    res.json(newReservation);
  } catch (error) {
    console.error('Error adding a new reservation to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for deleting a reservation (accessible only by managers)
router.delete('/delete-reservation/:id', isManager, async (req, res) => {
  const reservationId = req.params.id;

  try {
    await Reservation.destroy({ where: { id: reservationId } });
    res.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    console.error('Error deleting the reservation from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;