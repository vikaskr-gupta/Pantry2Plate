const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    time: String,
    image: String,
    method: String,
    // title: String,
    // ingredient1: String,
    // ingredient2: String,
    // ingredient3: String,
    // ingredient4: String,
    // ingredient5: String,
    ingredients: String,
    description: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);