var express = require('express');

var controller = require('../controllers/home.controller');

var router = express.Router();

router.get('/', controller.home)
module.exports = router;