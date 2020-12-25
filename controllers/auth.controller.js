const Authenticate = require('../model/auth.model');
let md5 = require('md5');
const User = require('../model/users.model');


module.exports.login = function(req, res){
	res.render('auth/login');
};

module.exports.postLogin = async function(req, res){
	let email = req.body.email;
	let password = req.body.password;
	let hasPassword = md5(password);
	let user = await User.findOne({email : email});
	if(!user.email){
		return res.render('auth/login', {
			errors: [
				'user is not exist.'
			],
			values : req.body
		})
	}
	

	if(hasPassword !== user.password){
		res.render('auth/login', {	
			errors : [
				'wrong password.'
			],
			values : req.body
		});
		return;
	}
	res.cookie('userId', user._id,{
		signed :true
	});
	res.redirect('/home');
}
