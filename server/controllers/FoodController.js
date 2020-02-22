const Yup = require('yup');
const Food = require('../models/FoodModel');

class FoodController {
	async index(req, res) {
		const foods = await Food.find({});

		return res.status(200).json(foods);
	}

	async store(req, res) {
		const { name, carbs, fat, protein } = req.body;

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			carbs: Yup.number()
				.required()
				.min(0)
				.max(100),
			fat: Yup.number()
				.required()
				.min(0)
				.max(100),
			protein: Yup.number()
				.required()
				.min(0)
				.max(100),
		});

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validation failed' });
		}

		const food = await Food.findOne({ name });

		if (food) {
			return res.status(406).json({ error: 'Food already registered.' });
		}

		const newFood = new Food({
			name,
			carbs,
			fat,
			protein,
		});

		await newFood.save();

		return res.status(201).json({ success: 'Food created' });
	}
}

module.exports = new FoodController();
