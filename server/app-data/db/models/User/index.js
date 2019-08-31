const mongoose = require('mongoose');

const User = mongoose.Schema({
  approved: {
    default: false,
    type: Boolean,
  },
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  role: {
    default: 2,
    type: Number,
  },
});

module.exports = mongoose.model('User', User);
