const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller')

router.get('/dashboard', profileController.dashboard);


module.exports = router;

