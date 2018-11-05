const Product = require ('../models/product.model')

export.test = function (req, res) {
	res.send('Greetings from the Test controller!');
};