const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { recipeSchema } = require('../schemas.js');
const { isLoggedIn } = require('../middleware');
const expressError = require('../utils/expressError');
const Recipe = require('../models/recipe');


//JIO SCHEMA VALIDATIONS
const validateRecipe = (req, res, next) => {
    const {error} = recipeSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new expressError(msg, 400)
    } else{
        next();
    }
}

//ALL RECIPES
router.get('/', catchAsync(async (req, res) => {
    const recipes = await Recipe.find({});
    res.render('recipes/index', {recipes});
}))


//NEW
router.get('/new', isLoggedIn, (req, res) => {
    res.render('recipes/new');
})
router.post('/', isLoggedIn, validateRecipe, catchAsync(async (req, res, next) => {
    const recipe = new Recipe(req.body.recipe);
    await recipe.save();
    req.flash('success', 'Successfully made a new recipe!')
    res.redirect(`/recipes/${recipe._id}`)
}))

//SHOW
router.get('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(!recipe){
        req.flash('error', 'Cannot find that recipe!');
        return res.redirect('/recipes');
    }
    res.render('recipes/show', { recipe });
}))

//EDIT
router.get('/:id/edit', isLoggedIn, catchAsync(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(!recipe){
        req.flash('error', 'Cannot find that recipe!');
        return res.redirect('/recipes');
    }
    res.render('recipes/edit', {recipe});
}))


//UPDATE
router.put('/:id', isLoggedIn, validateRecipe, catchAsync(async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id,{ ...req.body.recipe })
    req.flash('success', 'Successfully updated recipe!');
    res.redirect(`/recipes/${recipe._id}`)
}))


//DELETE
router.delete('/:id', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted recipe!');
    res.redirect('/recipes');
}))

module.exports = router;