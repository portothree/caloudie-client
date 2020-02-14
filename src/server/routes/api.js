const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	return res.status(200).json({ message: 'ok' });
});

router.get('/food', (req, res) => {
	return res.status(200).json({ message: 'ok' });
});

router.post('/food', (req, res) => {
	return res.status(200).json({ message: 'ok' });
});

module.exports = router;
