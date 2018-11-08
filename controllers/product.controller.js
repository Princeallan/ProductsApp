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

exports.product_details = function(req, res) {
	Product.findById(req.params.id, function(err, product){
		if (err) 
			return next(err);
		res.send(product);
	})
};

exports.product_update = function(req, res) {
	Product.findOneAndUpdate(req.params.id, {$set : req.body}, function(err, product){
		if (err) 
			return next(err);
		res.send('Product Succesfully updated!');
	})
};

exports.product_delete = function(req, res){
	Product.findOneAndDelete(req.params.id, function(err){
		if (err) 
			return next(err);
		res.send('Product Deleted Succesfully');
	})
};

// snap install postman
// sudo apt install snapd


// ubuntu 16.04
// sudo apt install snapd snapd-xdg-open