
exports.up = function(knex, Promise) {
	return knex.schema.withSchema('public').createTableIfNotExists('users', function (table) {
		table.uuid('id').primary().defaultTo(knex.raw("uuid_generate_v4()"));
		table.string('name');
		table.string('email').unique();
		table.string('linkedin_profile_pic_url');
		table.string('linkedin_headline');
		table.string('phone_number').unique();
		table.dateTime('created_at').notNull().defaultTo(knex.raw('now()'));
		table.dateTime('updated_at').notNull().defaultTo(knex.raw('now()'));
	}).createTableIfNotExists('rooms', function (table) {
		table.uuid('id').primary().defaultTo(knex.raw("uuid_generate_v4()"));
		table.string('name');
		table.dateTime('created_at').notNull().defaultTo(knex.raw('now()'));
		table.dateTime('updated_at').notNull().defaultTo(knex.raw('now()'));
	}).createTableIfNotExists('asks', function (table) {
		table.uuid('id').primary().defaultTo(knex.raw("uuid_generate_v4()"));
		table.string('content', 1000);
		table.uuid('user_id').index().references('id').inTable('users').notNull().onDelete('cascade');
		table.uuid('room_id').index().references('id').inTable('rooms').notNull().onDelete('cascade');
		table.dateTime('created_at').notNull().defaultTo(knex.raw('now()'));
		table.dateTime('updated_at').notNull().defaultTo(knex.raw('now()'));
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.withSchema('public')
		.dropTableIfExists('asks')
		.dropTableIfExists('rooms')
		.dropTableIfExists('users');
};
