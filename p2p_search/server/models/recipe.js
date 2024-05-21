const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    // name: {type: String, required: true},
    // img: {type: String, required: true},
    // year: {type: Number, required: true},
    // genre: {type: [String], required: true},
    // rating: {type: Number, required: true},

    name: {type: String, required: true}, //name
    time: {type: Number, required: true}, //rating
    img: {type: String, required: true}, //img
    method: {type: String, required: true}, //year
    ingredient: {type: [String], required: true}, //genre
    description: {type: String, required: true}, 
});

module.exports = mongoose.model("recipe", recipeSchema);