const express = require('express');
const router = express.Router();
const reservation = require('../models/reservation');

// Middleware to check if the user is authenticated

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Middleware to check if the user is a manager

const isManager = (req, res, next) => {
  if (req.user && req.user.role === 'manager') {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
};

// Route for fetching all gigs (accessible only by managers)

router.get('/all-gigs', isManager, async (req, res) => {
  try {
    const allGigs = await reservation.findAll();
    res.json(allGigs);
  } catch (error) {
    console.error('Error fetching all gigs from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for fetching personal gigs (accessible by both managers and clients)

router.get('/personal-gigs', isAuthenticated, async (req, res) => {
  const userId = req.user.id; // Assuming user ID is stored in req.user

  try {
    const personalGigs = await Gig.findAll({ where: { userId } });
    res.json(personalGigs);
  } catch (error) {
    console.error('Error fetching personal gigs from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for adding a new gig (accessible by both managers and clients)

router.post('/add-gig', isAuthenticated, async (req, res) => {
  const { title, description, date } = req.body;
  const userId = req.user.id; // Assuming user ID is stored in req.user

  try {
    const newGig = await reservation.create({ title, description, date, userId });
    res.json(newGig);
  } catch (error) {
    console.error('Error adding a new gig to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route for deleting a gig (accessible only by managers)

router.delete('/delete-gig/:id', isManager, async (req, res) => {
  const gigId = req.params.id;

  try {
    await reservation.destroy({ where: { id: gigId } });
    res.json({ message: 'Gig deleted successfully' });
  } catch (error) {
    console.error('Error deleting the gig from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
