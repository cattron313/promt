var express = require('express');
var router = express.Router();
var utils = require('../utils');
var pug = require('pug');
var {readFileSync} = require('fs');

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

router.get('/code2040', function(req, res, next) {
	var str = readFileSync('./server/views/room.pug', 'utf8')
  	var fn = pug.compile(str, { filename: './server/views/room.pug', pretty: true });
  	var data = {asks: [
		  {
		    "_id": "5848cc97ff42a0d3c3b74dbf",
		    "firstName": "Deleon",
		    "profilePic": "https://randomuser.me/api/portraits/women/92.jpg",
		    "description": "In irure aute sunt laborum enim amet sint est eiusmod amet sit excepteur.",
		    "headline": "laborum anim non"
		  },
		  {
		    "_id": "5848cc97fc1e4a96286739f1",
		    "firstName": "Lana",
		    "profilePic": "https://randomuser.me/api/portraits/women/2.jpg",
		    "description": "Aliqua eu nostrud veniam in occaecat anim incididunt exercitation Lorem aliqua dolor incididunt sunt.",
		    "headline": "consectetur commodo proident"
		  },
		  {
		    "_id": "5848cc97ba9ec461db785ffb",
		    "firstName": "Marcia",
		    "profilePic": "https://randomuser.me/api/portraits/men/39.jpg",
		    "description": "Lorem consectetur ut ea sint ullamco proident amet dolore.",
		    "headline": "dolore nisi magna"
		  },
		  {
		    "_id": "5848cc9700b9ce5254ef2029",
		    "firstName": "Harriett",
		    "profilePic": "https://randomuser.me/api/portraits/women/57.jpg",
		    "description": "Irure dolor consectetur incididunt ut tempor nostrud tempor irure esse qui reprehenderit enim proident amet.",
		    "headline": "dolore dolore cupidatat"
		  },
		  {
		    "_id": "5848cc970a5e6a17f5e360be",
		    "firstName": "Cameron",
		    "profilePic": "https://randomuser.me/api/portraits/men/93.jpg",
		    "description": "Officia aliqua enim sit consectetur ipsum in ullamco magna.",
		    "headline": "nostrud cillum fugiat"
		  }
		]
	};
	if (process.env.NODE_ENV == 'production') { data.prod = process.env.NODE_ENV }
	res.send(fn(data));
});

module.exports = router;
