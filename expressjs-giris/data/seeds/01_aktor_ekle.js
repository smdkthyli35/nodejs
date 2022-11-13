exports.seed = async function(knex) {
  await knex('aktor').del()
  await knex('aktor').insert([
    {id: 1, isim: 'Kemal Sunal'},
    {id: 2, isim: 'Sener Sen'},
    {id: 3, isim: 'Adile Nasit'}
  ]);
};
