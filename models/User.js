const mongoose = require('mongoose');
const {merchantOneConnection, merchantTwoConnection} = require('../MerchantDB');

let UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  phoneNumber: {
    type: Number,
    trim: true,
    required: true,
    unique: true
  }
}, {
  versionKey: false,
  timestamps: true,
  strict: true
});

// module.exports.defaultUser = mongoose.model('User', UserSchema);
// module.exports.User1 = merchantOneConnection.model('User', UserSchema);
// module.exports.User2 = merchantTwoConnection.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema);
console.log('User.js is loaded successfully');