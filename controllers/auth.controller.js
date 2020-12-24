var db = require('../db');

var md5 = require('md5');
module.exports.login = function(req, res){
	res.render('auth/login');
};

module.exports.postLogin = function(req, res){
	 var email = req.body.email;
	 var password = req.body.password;
	 var hassPassword = md5(password)
	 var user = db.get('users').find({email : email}).value();
	 if(!user){
	 	res.render('auth/login', {
	 		errors: [
	 			'user is not exist.'
	 		],
	 		values : req.body
	 	});
	 	return;
	}

	 if(hassPassword !== user.password){
	 	res.render('auth/login', {
	 		errors : [
	 			'wrong password.'
	 		],
	 		values : req.body
	 	});
	 	return;
	 }
	 res.cookie('userId', user.id,{
	 	signed :true
	 });
	 res.redirect('/home');
}
