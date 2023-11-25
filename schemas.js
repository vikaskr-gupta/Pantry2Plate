const Joi = require('joi');

module.exports.recipeSchema = Joi.object({
    recipe: Joi.object({
        name: Joi.string().required(),
        time: Joi.string().required(),
        image: Joi.string().required(),
        method: Joi.string().required(),
        ingredient: Joi.string().required(),
        description: Joi.string().required(),
    }).required()
});