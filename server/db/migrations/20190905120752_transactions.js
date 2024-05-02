/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.createTable('transactions', (table) => {
    table.increments('id')
    table.integer('amount')
    table.string('message')
    table.integer('user_id')
    table.dateTime('date')
  })
}

export function down(knex) {
  return knex.schema.dropTable('transactions')
}
