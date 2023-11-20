const Joi = require('joi');

module.exports.recipeSchema = Joi.object({
    recipe: Joi.object({
        name: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.string().required(),
        formula: Joi.string().required(),
        ingredient_1: Joi.string().required(),
        ingredient_2: Joi.string().required(),
        ingredient_3: Joi.string().required(),
        ingredient_4: Joi.string().required(),
        description: Joi.number().required(),
    }).required()
});