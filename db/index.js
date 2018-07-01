const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/doctors';

// could have used BetterDoctor API for data instead of building a database and generating mock data

const db = mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open');
});

module.exports = db;
