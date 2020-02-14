const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
	name: String,
	carbs: Number,
	fat: Number,
	protein: Number,
});

const Food = new mongoose.model('Food', FoodSchema);

module.exports = Food;
