const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
  name: { type: String, required: true,index: { unique: true }},
  email: { type: String, required: true,index: { unique: true }},
  password: { type: String, required: true , minlength: 5},
  isLaunderer: { type: Boolean, default: false },
  fee: { type: Number, default: null }
});

userSchema.set('timestamps', true);

userSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  })
}

const User = mongoose.model('User', userSchema);

module.exports = User;


