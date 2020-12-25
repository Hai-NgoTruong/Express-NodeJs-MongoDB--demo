const User = require('../model/users.model');

module.exports.index = async function(req, res){
	let users = await User.find({});
	res.render('users/index', {
		users : users
	});
};
module.exports.search = async function(req, res){
	let q = req.query.q;				
	let matchedUsers = await User.find({});
	matchedUsers.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	}); 
	res.render('users/index',{
		users : matchedUsers
	});
	q = " "; 
};

module.exports.add = function(req, res){
	res.render('users/add')
};

module.exports.id = async function(req, res){
	let id = req.params.id;
	let user = await User.find({id: id});
	res.render('users/view', {
		user : user
	});	
};
module.exports.postAdd = async function(req, res){
	req.body.avatar = req.file.path.split('\\').slice(1).join('\\'); 
	let newUser = User(req.body);
	newUser.save();
	   res.redirect('/users');
};