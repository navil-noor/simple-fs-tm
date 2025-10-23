// server/db/migrations/[timestamp]_create_tasks_table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // Define what happens when we UPGRADE the database (create the table)
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary(); // Unique ID, auto-increments
    table.string('title').notNullable(); // The name/content of the task
    table.boolean('is_completed').notNullable().defaultTo(false); // Task status
    table.timestamps(true, true); // Adds 'created_at' and 'updated_at' columns
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // Define what happens when we DOWNGRADE the database (drop the table)
  return knex.schema.dropTable('tasks');
};