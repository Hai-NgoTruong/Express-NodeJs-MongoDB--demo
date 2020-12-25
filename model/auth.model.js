const mongoose = require('mongoose');

const checkUserSchema = new mongoose.Schema({
    email : String,
    password : String,
    name : String,
    avatar : String,
    phone : String
});

var Authenticate = mongoose.model('Authenticate', checkUserSchema, 'users') // (name, userSchema, collection)

module.exports = Authenticate;