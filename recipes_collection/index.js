const mongoose = require('mongoose');
const details = require('./all_recipes');
const {places, descriptors} = require('./helper');
const Recipe = require('../models/recipe');


mongoose.connect('mongodb://localhost:27017/p2p-recipe')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected!");
});

// const sample = array => array[Math.floor(Math.random() * array.length)];


const recipeDB = async() => {
    await Recipe.deleteMany({});
    for(let i=0; i< 15; i++){
        const reci = new Recipe({
            rank : `${details[i].rank}, ${details[i].title}, ${details[i].ingredient}, ${details[i].formula}, ${details[i].discription}`,
            title: `${descriptors[i]} - ${places[i]}`
        })
        await reci.save();
    }
    // for(let recipe of details){
    //     const reci = new Recipe({
    //         title: `${recipe.title}`
    //     })
    //     await reci.save();
    // }
}

recipeDB().then(() => {
    mongoose.connection.close();
})