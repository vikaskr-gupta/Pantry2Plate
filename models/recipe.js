const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    time: String,
    image: String,
    method: String,
    ingredient: String,
    // ingredient_2: String,
    // ingredient_3: String,
    // ingredient_4: String,
    // ingredient_5: String,
    // ingredient_6: String,
    // ingredient_7: String,
    description: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);