const express = require('express');
const FoodController = require('../controllers/FoodController');

const router = express.Router();

router.get('/', (req, res) => {
	return res.status(200).json({ message: 'ok' });
});

router.get('/food', FoodController.index);

router.post('/food', (req, res) => {
	return res.status(200).json({ message: 'ok' });
});

module.exports = router;
