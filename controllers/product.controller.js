var db = require('../db');

module.exports.product = function(req, res){
	var page = parseInt(req.query.page) || 1;

	perPage = 8;
	start = (page - 1) * perPage;
	end = perPage * page;

	let data = {
		products: db.get('product').value().slice(start, end),
		page
	}

	let cart = req.cookies.cart || null
	if (cart) {
		cart = JSON.parse(cart)
		data['sum'] = Object.keys(cart).reduce((total, productId) => total + parseInt(cart[productId]), 0)
	}
	
	return res.render('product/product', data);

};

// vi cai cho xu li sum no chi o product controller
// noi chung la can thiet ke lai code de reuse dc vai thu
// ok................. xie xie``
// code kho lam ban oi =))))))
// thiet ke + phat trien app ngay tu dau implement ko dung thi sau sua lai met vl.
//lan dau lam khong biet :3 