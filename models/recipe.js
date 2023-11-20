const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    title: String,
    image: String,
    formula: String,
    ingredient_1: String,
    ingredient_2: String,
    ingredient_3: String,
    ingredient_4: String,
    ingredient_5: String,
    ingredient_6: String,
    ingredient_7: String,
    description: Number
});

module.exports = mongoose.model('Recipe', RecipeSchema);