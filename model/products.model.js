const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    image : String, 
    description : String
});

var Product = mongoose.model('Product', productSchema, 'products') // (name, productSchema, collection)


module.exports = Product;