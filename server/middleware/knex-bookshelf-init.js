var knex = require('knex')(require('../../db/knexfile'));
module.exports = require('bookshelf')(knex);
