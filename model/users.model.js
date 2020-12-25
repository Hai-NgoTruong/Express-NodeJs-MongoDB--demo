const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    name : String,
    avatar : String,
    phone : String
});

var User = mongoose.model('User', userSchema, 'users') // (name, userSchema, collection)

module.exports = User;