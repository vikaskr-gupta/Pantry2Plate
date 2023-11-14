const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Recipe = require('./models/recipe');

// import express, { urlencoded } from 'express';
// import { join } from 'path';
// import { connect, connection } from 'mongoose';
// import methodOverride from 'method-override';
// import Recipe, { find, findById, findByIdAndUpdate, findByIdAndDelete } from './models/recipe';



//CONNECT WITH MONGODB
mongoose.connect('mongodb://localhost:27017/p2p-recipe');


//CONNECTION CHECKUP
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected!");
});


const app = express();


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));



//HOME
app.get('/', (req, res) => {
    res.render('home');
})

//ALL RECIPES
app.get('/recipes', async (req, res) => {
    const recipes = await Recipe.find({});
    res.render('recipes/index', {recipes});
})

//NEW
app.get('/recipes/new', (req, res) => {
    res.render('recipes/new');
})
app.post('/recipes', async (req, res) => {
    const recipe = new Recipe(req.body.recipe);
    await recipe.save();
    res.redirect(`/recipes/${recipe._id}`)
})

//SHOW RECIPE
app.get('/recipes/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    res.render('recipes/show', {recipe});
})

//EDIT
app.get('/recipes/:id/edit', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    res.render('recipes/edit', {recipe});
})



//UPDATE
app.put('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id,{ ...req.body.recipe })
    res.redirect(`/recipes/${recipe._id}`)
});



//DELETE
app.delete('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    res.redirect('/recipes');
})

//LISTEN
app.listen(3000, () => {
    console.log('Serving on port 3000');
})