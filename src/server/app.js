const express = require('express');
const path = require('path');

const apiRoutes = require('./routes/api');

class App {
	constructor() {
		this.server = express();

		this.middlewares();
		this.routes();
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
