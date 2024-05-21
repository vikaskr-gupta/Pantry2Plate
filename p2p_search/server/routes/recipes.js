const router = require("express").Router();
const Recipe = require("../models/recipe");
// const recipes = require("../recipes_collection/recipes.json");

router.get("/search", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort || "description";
		let ingredient = req.query.ingredient || "All";

		const ingredientOptions = [
			"Potato",
			"Curd",
			"Milk",
			"Ghee",
			"Geera",
			"Chillies",
			"Salt",
			"Sugar",
			"Water",
			"Flour",
			"Oil",
			"Paneer",
			"Tomato",
			"Potato",
			"Ginger",
			"Onion",
			"Garlic",
			// llllllllllllllllllll
			"Besan", 
			"Turmeric",
			"Lemon",
			"Poha"
		];

		ingredient === "All"
			? (ingredient = [...ingredientOptions])
			: (ingredient = req.query.ingredient.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const recipes = await Recipe.find({ name: { $regex: search, $options: "i" } })
			.where("ingredient")
			.in([...ingredient])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await Recipe.countDocuments({
			ingredient: { $in: [...ingredient] },
			name: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			ingredients: ingredientOptions,
			recipes,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});
///////////////////////////////////////////////////////////////////////////////
// const insertRecipes = async () => {
//     try {
//         const docs = await Recipe.insertMany(recipes);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertRecipes()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports = router;
