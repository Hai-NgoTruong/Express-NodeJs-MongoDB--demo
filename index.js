require('dotenv').config()

var express = require('express');
var app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Express', {useNewUrlParser: true});

var userRoute = require('./routes/user.route')
var authRoute = require('./routes/auth.route')
var productRoute = require('./routes/product.route')
var cartRoute = require('./routes/cart.route')

var cookieParser = require('cookie-parser')

var sessionMiddleware = require('./middlewares/session.middleware')
var authMiddleware = require('./middlewares/auth.middleware')

var homeRoute = require('./routes/home.route')
var port  = 3000;

app.use(cookieParser(process.env.SESSION_SECRET))

app.set('view engine', 'pug');
app.set('views', './views');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(sessionMiddleware);
app.use(express.static('public'));

app.use('/product',authMiddleware.requireAuth, productRoute);
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/Home', authMiddleware.requireAuth, homeRoute)
app.use('/auth', authRoute);
app.use('/cart', cartRoute);
app.listen(port,function(){
	console.log('server is listening on ' + port);
});			
	

