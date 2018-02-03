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


userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;


