const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/doctors';

const db = mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open');
});

module.exports = db;