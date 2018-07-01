const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const db = require('./index.js');
const { Doctor } = require('./schema/Doctor.js');

const insertSampleData = function(data) {
  Doctor.create(data)
    .then(() => mongoose.disconnect());
};

fs.readFile(path.join(__dirname, './data/doctorList.json'), (err, data) => {
  if (err) throw err;
  var doctors = JSON.parse(data);

  insertSampleData(doctors);
});
