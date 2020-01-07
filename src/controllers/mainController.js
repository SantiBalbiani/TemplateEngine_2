const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		let prodsOnSale = products.filter( pr => pr.category == "in-sale");
		let prodsVisited = products.filter( pr => pr.category == "visited");
		res.render('index', {visited: prodsVisited, onSale: prodsOnSale});
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
