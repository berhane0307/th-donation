/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  // await knex('transactions').del()
  await knex('transactions').insert([
    {
      id: 1,
      amount: 100,
      message: 'Payment for goods',
      user_id: 1,
      date: '04/3/2024',
    },
    {
      id: 2,
      amount: 200,
      message: 'Service fee',
      user_id: 2,
      date: '04/21/2024',
    },
  ])
}
