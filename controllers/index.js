const router = require('express').Router();
const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/apiRoutes');
const homeRoutes = require('./homeRoutes');
const authController = require('./authController')

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', authController);

module.exports = router;