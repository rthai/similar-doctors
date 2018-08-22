exports.up = function(knex, Promise) {
  return knex.schema.createTable('doctors', (table) => {
    table.increments(); // id column serial
    table.string('name').notNullable();
    table.string('thumbnail').notNullable();
    table.string('specialty').notNullable();
    table.string('street_name').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('phone_number').notNullable();
    table.decimal('rating', 2, 1).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('doctors');
};
