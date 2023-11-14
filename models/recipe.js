const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    rank: String,
    name: String,
    ingredient: String,
    formula: String,
    // image: String,
    discription: String,
    title: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);