const express = require('express');
const router = express.Router();
// const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/apiRoutes');
const authController = require('./authController');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Using authController as middleware
router.use(authController);

module.exports = router;