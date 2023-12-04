const express = require('express');
const router = express.Router();
// require ('../public/search.css');
const App = require('./App');

router.get('/App', (req, res) => {
    res.render(App);
})
module.exports = router;


// const catchAsync = require('../utils/catchAsync');
// const Recipe = require('../models/recipe');

// router.get('/search', (req, res) => {
//     res.render('search');
// })
// module.exports = router;

// router.get('/search', catchAsync(async (req, res) => {
//     const page = parseInt(req.query.page) - 1 || 0;
// 		const limit = parseInt(req.query.limit) || 5;
// 		const search = req.query.search || "";
// 		let sort = req.query.sort || "description";
// 		let ingredient = req.query.ingredient || "All";

// 		const ingredientOptions = [
// 			"potato",
// 			"curd",
// 			"milk",
// 			"ghee",
// 			"geera",
// 			"chillies",
// 			"Salt",
// 			"Sugar",
// 			"Water",
// 			"Flour",
// 			"Oil",
// 			"Paneer",
// 			"Tomato",
// 			"Potato",
// 			"Ginger",
// 			"Onion",
// 			"garlic"
// 		];

// 		ingredient === "All"
// 			? (ingredient = [...ingredientOptions])
// 			: (ingredient = req.query.ingredient.split(","));
// 		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

// 		let sortBy = {};
// 		if (sort[1]) {
// 			sortBy[sort[0]] = sort[1];
// 		} else {
// 			sortBy[sort[0]] = "asc";
// 		}

// 		const recipes = await Recipe.find({ name: { $regex: search, $options: "i" } })
// 			.where("ingredient")
// 			.in([...ingredient])
// 			.sort(sortBy)
// 			.skip(page * limit)
// 			.limit(limit);

// 		const total = await Recipe.countDocuments({
// 			ingredient: { $in: [...ingredient] },
// 			name: { $regex: search, $options: "i" },
// 		});

// 		const response = {
// 			error: false,
// 			total,
// 			page: page + 1,
// 			limit,
// 			ingredients: ingredientOptions,
// 			recipes,
// 		};
// 		// res.status(200).json(response);
//     res.render('search');
// }))

// module.exports = router;