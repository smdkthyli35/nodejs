exports.seed = async function(knex) {
  await knex('film').del()
  await knex('film').insert([
    {id: 1, isim: 'Tosun Pasa'},
    {id: 2, isim: 'Banker Bilo'},
    {id: 3, isim: 'Neseli Gunler'}
  ]);
};
