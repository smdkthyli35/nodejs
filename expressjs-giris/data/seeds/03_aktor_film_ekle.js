exports.seed = async function (knex) {
  await knex("aktor_film").del();
  await knex("aktor_film").insert([
    { film_id: 1, aktor_id: 1 },
    { film_id: 2, aktor_id: 2 },
    { film_id: 3, aktor_id: 3 },
  ]);
};
