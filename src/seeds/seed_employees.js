/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('employees').del()
  await knex('employees').insert([
    {
      name: 'Ali Hassan',
      email: 'ali.hassan@example.com',
      phone: '01012345678',
      address: 'Cairo, Egypt',
      created_at: new Date()
    },
    {
      name: 'Ahmed Mohamed',
      email: 'ahmed.mohamed@example.com',
      phone: '01112345678',
      address: 'Alexandria, Egypt',
      created_at: new Date()
    },
    {
      name: 'Mohamed Ali',
      email: 'mohamed.ali@example.com',
      phone: '01212345678',
      address: 'Giza, Egypt',
      created_at: new Date()
    },
  ]);
};
