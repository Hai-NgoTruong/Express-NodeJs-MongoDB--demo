module.exports.postAdd = function(req, res, next){
	 errors = [];
	if(!req.body.name){
		errors.push('Name is required');
	}
	if(!req.body.phone){
		errors.push('Phone is required');
	}
	if(!reg.body.avatar){
		
	}
	if(errors.length){
		res.render('users/add',{
			errors : errors,
			values : req.body
		});
		return;
	}
	next();
}