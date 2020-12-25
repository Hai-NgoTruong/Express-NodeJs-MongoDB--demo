const User = require('../model/users.model');
//tu nhien no import vao t cha biet
// o.O tu nhien no co'
// how to tu nhien? :3 chiu
// chay lai xem nao, chat cl (y)
module.exports.requireAuth = async function(req, res, next){
	let cookie = req.signedCookies.userId;
	if(!cookie){
		res.redirect('/auth/login');
		return;
	}
	var user = await User.findOne({_id : cookie})

	if(!user){
		res.redirect('/auth/login');
		return;
	}
	res.locals.userId = req.signedCookies.userId;
	next();
}
//right ??