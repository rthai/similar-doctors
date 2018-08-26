// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/similar_doctors'
  },
  test: {
    client: 'postgresql',
    connection: 'postgres://localhost/similar_doctors'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  },
};
