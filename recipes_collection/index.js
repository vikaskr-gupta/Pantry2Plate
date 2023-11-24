const mongoose = require('mongoose');
const details = require('./all_recipes');
// const {places, descriptors} = require('./helper');
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
    for(let i=0; i< 1; i++){
        const reci = new Recipe({
            //Everything is callinng from same file except title
            name: `${details[i].name}`,
            // title: `${descriptors[i]} - ${places[i]}`,
            time: `${details[i].time}`,
            image: `${details[i].image}`,
            method: `${details[i].method}`, 
            ingredient: `${details[i].ingredient}`, 
            // ingredient_2: `${details[i].ingredient_2}`, 
            // ingredient_3: `${details[i].ingredient_3}`, 
            // ingredient_4: `${details[i].ingredient_4}`, 
            // ingredient_5: `${details[i].ingredient_5}`, 
            // ingredient_6: `${details[i].ingredient_6}`, 
            // ingredient_7: `${details[i].ingredient_7}`, 
            // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XkySihon_1vO738aeah1NEASxQ07vLTee1P6cJ_MlVfaokghr5OoJH02Er3-DIa3Nck&usqp=CAU",
            description: `${details[i].description}`
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