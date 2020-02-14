const Food = require('../models/FoodModel');

class FoodController {
	async index(req, res) {
		const foods = await Food.find({});

		return res.status(200).json(foods);
	}
}

module.exports = new FoodController();
