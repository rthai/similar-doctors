const { Pool } = require('pg');

const pool = new Pool({
  database: 'similar_doctors',
});

const getDoctorsBySpecialty = (specialty) => {
  const q = `select * from doctors where specialty = ${specialty}`;
  return pool.query(q);
}

module.exports = {
  pool,
  getDoctorsBySpecialty,
}