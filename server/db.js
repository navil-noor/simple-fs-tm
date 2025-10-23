// server/db.js

const knex = require('knex');
const knexfile = require('./knexfile');

// Initialize the Knex connection using the 'development' configuration
const db = knex(knexfile.development);

module.exports = db; 
