const User = require('../models/user');
require('mongoose');

module.exports.dashboard = (req, res, next) => {
    res.render('laundry/dashboard')
}