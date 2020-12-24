var db = require('../db');

module.exports.addToCart = function(req, res){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId){
        return res.redirect('/product');
    }

    var count = db.get('sessions').find({id : sessionId}).get('cart.'+productId, 0).value();
    db.get('sessions').find({id : sessionId}).set('cart.'+productId, count + 1).write();

    var cart = db.get('sessions').find({id : sessionId}).get('cart').value();

    res.cookie('cart', JSON.stringify(cart))

    return res.redirect('/product');
}