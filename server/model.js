var knex = require('knex')(require('../db/knexfile').development);
var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({  
	tableName: 'users',
	hasTimestamps: true,
},
{
	byEmail: function(email) {
		return this.forge().query({where:{ email: email }}).fetch();
	}
});

var Room = bookshelf.Model.extend({  
	tableName: 'rooms',
	hasTimestamps: true,
	asks() {
		return this.hasMany(Ask);
	}
},
{
	byName: function(name) {
		return this.forge().query({where:{ name: name }}).fetch();
	}
});

var Ask = bookshelf.Model.extend({  
	tableName: 'asks',
	hasTimestamps: true,
	author() {
		return this.belongsTo(User);
	},
	room() {
		return this.belongsTo(Room);
	}
});

module.exports = {
	User,
	Room,
	Ask
};