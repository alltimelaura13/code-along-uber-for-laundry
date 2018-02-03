const User = require('../models/user');
require('mongoose');

module.exports.dashboard = (req, res, next) => {
    let id = req.session.passport.user
    res.render('laundry/dashboard')
}


