exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: 'Salmon with Rice', recipe_id: 1 },
        { name: 'Chicken with lemon pepper', recipe_id: 2 },
        { name: 'Pasta with Sauce', recipe_id: 2 },
      ]);
    });
};
