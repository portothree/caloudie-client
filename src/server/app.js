const express = require('express');
const path = require('path');

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
		this.server.get('*', (req, res) => {
			res.sendFile(path.join(__dirname, '../../dist/index.html'));
		});
	}
}

module.exports = new App().server;
