var express = require('express');
var router = express.Router();
var utils = require('../utils');


/* GET home page. */
router.get('/', function(req, res, next) {
	switch (process.env.NODE_ENV) {
		case 'production':
  			res.render('index', { title: 'Express' });
			break;
		default:
			res.redirect('/build/index.html');
	}
});

module.exports = router;
