const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
