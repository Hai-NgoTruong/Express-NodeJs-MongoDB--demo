module.exports.postAdd = function(req, res, next){
	 errors = [];
	 let Username = req.body.name;
	 let UserPhone = req.body.phone;
	if(!Username){
		errors.push('Name is required');
	}
	if(!UserPhone){
		errors.push('Phone is required');
	}
	if(errors.length){
		return res.render('users/add',{
			errors : errors,
			values : req.body
		});
	}
	next();
}