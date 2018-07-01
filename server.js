const path = require('path');
const express = require('express');
const db = require('./db/index.js');
const { getDoctors } = require('./db/schema/Doctor.js');

const app = express();
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/api/doctors', function(req, res) {
  const dept = req.query.specialty;
  const area = req.query.city;

  getDoctors(dept, area)
    .then((doctors) => res.send(doctors))
    .catch((error) => res.status(500).send(error));
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
