const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    rank: String,
    title: String,
    ingredient: String,
    formula: String,
    discription: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);