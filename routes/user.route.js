var express = require('express');
var multer  = require('multer');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.middleware');
var authMiddleware = require('../middlewares/auth.middleware')

var router = express.Router();

var upload = multer({ dest: './public/uploads/' })

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/add', controller.add);

router.get('/:id', controller.id);

router.post('/add', upload.single('avatar'), validate.postAdd, controller.postAdd);

module.exports = router;	