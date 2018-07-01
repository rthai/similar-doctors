const fs = require('fs');
const db = require('./index.js');
const Doctor = require('./schema/Doctor.js');
const mongoose = require('mongoose');

const insertSampleData = function(data) {
  Doctor.create(data)
    .then(() => mongoose.disconnect());
};

fs.readFile('./data/doctorList.json', (err, data) => {
  if (err) throw err;
  var doctors = JSON.parse(data);

  insertSampleData(doctors);
});
