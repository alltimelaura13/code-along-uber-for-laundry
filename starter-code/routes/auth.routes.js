const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

/* GET home page. */
router.get('/signup', authController.signup)
module.exports = router;
