const express = require('express');
const router = express.Router();
const userRoutes = require('./user/userRoutes'); // Adjust the path accordingly
const equipmentRoutes = require('./equipmentRoutes'); // New equipment routes

router.use('/user', userRoutes);
router.use('/equipment', equipmentRoutes); 

module.exports = router;