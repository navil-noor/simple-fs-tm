// server/knexfile.js
// This file exports the Knex configuration object.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      // Define the path to our database file (it will be created automatically)
      filename: './db/dev.sqlite3' 
    },
    useNullAsDefault: true, // Recommended for SQLite
    migrations: {
      directory: './db/migrations' // Location for our table schema files
    }
  }
}; 
