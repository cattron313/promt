var express = require('express');
var router = express.Router();
var pug = require('pug');
var {readFileSync} = require('fs');

var {Ask} = require('../model');

function getAsks(req, res, next) {
	Ask.fetchAll({ withRelated: ['author'] }).then(function(asks) {
		req.asks = asks.serialize();
		next();
	}).catch(function(err) {
		next(err);
	});
}

/* GET home page. */
router.get('/', function(req, res, next) {
	var str = readFileSync('./server/views/index.pug', 'utf8')
	var fn = pug.compile(str, { filename: './server/views/index.pug', pretty: true });

	switch (process.env.NODE_ENV) {
		case 'production':
			res.send(fn({ title: 'Express' }));
			break;
		default:
			res.redirect('/build/index.html');
	}
});

router.get('/code2040', getAsks, function(req, res, next) {
	var str = readFileSync('./server/views/room.pug', 'utf8')
  	var fn = pug.compile(str, { filename: './server/views/room.pug', pretty: true });
  	var data = {asks: req.asks};
	if (process.env.NODE_ENV == 'production') { data.prod = process.env.NODE_ENV }
	res.send(fn(data));
});

module.exports = router;
