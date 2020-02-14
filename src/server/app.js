const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const apiRoutes = require('./routes/api');

class App {
	constructor() {
		this.server = express();

		this.database();
		this.middlewares();
		this.routes();
	}

	database() {
		mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
	}

	middlewares() {
		this.server.use(express.static('dist'));
	}

	routes() {
		this.server.use('/api', apiRoutes);

		this.server.get('*', (req, res) => {
			res.sendFile(path.join(__dirname, '../../dist/index.html'));
		});
	}
}

module.exports = new App().server;
