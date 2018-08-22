const data = require('../db/data/doctorList.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    // then insert sample data
  return knex('doctors').del()
    .then( () => knex('doctors').insert(data))
};
