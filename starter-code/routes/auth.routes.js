const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

/* GET home page. */
router.get('/signup', authController.signup)
router.post('/signup', authController.doSignup)


module.exports = router;

