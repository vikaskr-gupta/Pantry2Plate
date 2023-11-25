const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    time: String,
    image: String,
    method: String,
    ingredient: String,
    description: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);