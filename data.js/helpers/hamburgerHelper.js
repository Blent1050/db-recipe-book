const db = require('../dbConfig.js');

module.exports = {
  getDishes,
  getById,
  getRecipes,
  addRecipe,
  addDishes,
};

function getDishes() {
  return db('dishes');
}
function addDishes(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => {
      return getById(ids[0]);
    });
}
function getById(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function getRecipes(dishId) {
  return db('recipe as r')
    .join('dishes as d', 'd.id', 'd.dish_id')
    .select('r.id', 'r.name', 'd.name as dishesBy')
    .where('r.user_id', dishId);
}

function addRecipe(recipe) {
  return db('dishes')
    .insert(recipe)
    .then(ids => {
      return getById(ids[0]);
    });
}
