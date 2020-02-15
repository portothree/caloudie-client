const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/api');

const devMode = process.env.NODE_ENV === 'development';

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
		if (devMode) {
			this.server.use(
				cors({
					origin: 'http://localhost:4200',
				})
			);
		}

		this.server.use(express.json());
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
