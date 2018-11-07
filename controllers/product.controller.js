const Product = require ('../models/product.model.js')

exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res){

	let product = new Product (
		{
			name: req.body.name,
			price: req.body.price
		}
	);

	product.save(function (err) {
		if(err){
			return next(err);
		}
		res.send('Product Succesfully Added')
	})
};


// snap install postman
// sudo apt install snapd


// ubuntu 16.04
// sudo apt install snapd snapd-xdg-open