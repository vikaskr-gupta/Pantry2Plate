const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    title: String,
    image: String,
    formula: String,
    ingredient: String,
    description: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);