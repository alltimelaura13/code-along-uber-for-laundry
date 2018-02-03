const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const secure = require('../middleware/secure.middleware');

router.get('/dashboard', secure.isAuthenticated, profileController.dashboard);

// router.get('/launderers',  laundryController.launders);
// router.post('/launderers',  laundryController.doLaunder);

// router.get('/launderers/:id',  laundryController.profile);
// router.post('/launderers/:id/schedule-pickup',  laundryController.schedulePickup);


module.exports = router;

