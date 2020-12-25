const Product = require('../model/products.model');

module.exports.product = async function(req, res){

	let products = await Product.find({});
	return res.render('product/product',{
		products : products
	});

};
