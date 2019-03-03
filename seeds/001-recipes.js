exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe').insert([
        { name: 'Fish', ingredient_id: 1 },
        { name: 'Chicken', ingredient_id: 2 },
        { name: 'Pasta', ingredient_id: 3 },
      ]);
    });
};
