const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const secure = require('../middleware/secure.middleware');

router.get('/dashboard', secure.isAuthenticated, profileController.dashboard);
router.get('/launderer-profile', secure.isAuthenticated, profileController.seeLaunderers)


module.exports = router;

