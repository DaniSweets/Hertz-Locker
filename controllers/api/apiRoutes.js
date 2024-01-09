const express = require('express');
const router = express.Router();
const userRoutes = require('./user/userRoutes'); 
const equipmentRoutes = require('./manager/equipmentRoutes'); 
// const reservationRoutes = require('./manager/reservationRoutes');

router.use('/user', userRoutes);
router.use('/equipment', equipmentRoutes); 
// router.use('/reservation', reservationRoutes);

module.exports = router;