const knex = require('./knex');

const getDoctors = (specialty, city) => (
  knex('doctors')
    .select()
    .where({
      specialty: specialty,
      city: city
    })
    .orderBy('rating', 'desc')
    // .then(rows => { rows })
    // .then( () => knex.destroy())
    .catch(err => console.error(err))
);

// console.log(getDoctors('Immunology', 'San Francisco'))

module.exports = {
  // knex,
  getDoctors,
}
