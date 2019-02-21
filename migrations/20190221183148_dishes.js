exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl) {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.timestamps(true, true);
    tbl
      .string('recipe_id', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
