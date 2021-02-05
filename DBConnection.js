const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.PARENT_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log(`MongoDB connection established`);
});

mongoose.connection.on('connected', () => {
  console.log('Mongo-connection URL: '+ process.env.PARENT_DATABASE_URL);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connection is disconnected or close');
});

mongoose.connection.on('error', err => {
  console.log('Connection Error');
  console.error(err)
});

mongoose.set('debug', true);
console.log('DBConnection.js loaded successfully');