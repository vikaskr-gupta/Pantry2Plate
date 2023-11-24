const Joi = require('joi');

module.exports.recipeSchema = Joi.object({
    recipe: Joi.object({
        name: Joi.string().required(),
        time: Joi.string().required(),
        image: Joi.string().required(),
        method: Joi.string().required(),
        ingredient: Joi.string().required(),
        // ingredient_2: Joi.string().required(),
        // ingredient_3: Joi.string().required(),
        // ingredient_4: Joi.string().required(),
        // ingredient_5: Joi.string().required(),
        // ingredient_6: Joi.string().required(),
        // ingredient_7: Joi.string().required(),
        description: Joi.string().required(),
    }).required()
});