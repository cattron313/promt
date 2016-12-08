
exports.seed = function(knex, Promise) {
	return knex('users').insert([{
		id: 'f02c416f-9b2f-4f06-86c6-10239a70fc15',
		name: "Deleon",
		linkedin_profile_pic_url: "https://randomuser.me/api/portraits/women/92.jpg",
		linkedin_headline: "laborum anim non"
	},{
		id: '48a9ff0a-1883-4bdb-877a-59d27361a5e8',
		name: "Lana",
		linkedin_profile_pic_url: "https://randomuser.me/api/portraits/women/2.jpg",
		linkedin_headline: "consectetur commodo proident"
	},{
		id: '379a3353-d946-4927-a871-a1922702c779',
		name: "Marcia",
		linkedin_profile_pic_url: "https://randomuser.me/api/portraits/men/39.jpg",
		linkedin_headline: "dolore nisi magna"
	},{
		id: '56970c1c-5982-4cae-865c-efec79b7b931',
		name: "Harriett",
		linkedin_profile_pic_url: "https://randomuser.me/api/portraits/women/57.jpg",
		linkedin_headline: "dolore dolore cupidatat"
	},{
		id: 'e11c6e87-63ac-45c0-ba74-456da4a59a98',
		name: "Cameron",
		linkedin_profile_pic_url: "https://randomuser.me/api/portraits/men/93.jpg",
		linkedin_headline: "nostrud cillum fugiat"
	}]).then(function(users) {
		console.log('USERS: ' + JSON.stringify(users));
		return knex('asks').insert([{
			content: "In irure aute sunt laborum enim amet sint est eiusmod amet sit excepteur.",
			room_id: '2033193a-3355-492a-aa3f-d95e03efa8ee',
			user_id: 'f02c416f-9b2f-4f06-86c6-10239a70fc15'
		},{
			content: "Aliqua eu nostrud veniam in occaecat anim incididunt exercitation Lorem aliqua dolor incididunt sunt.",
			room_id: '2033193a-3355-492a-aa3f-d95e03efa8ee',
			user_id: '48a9ff0a-1883-4bdb-877a-59d27361a5e8'
		},{
			content: "Lorem consectetur ut ea sint ullamco proident amet dolore.",
			room_id: '2033193a-3355-492a-aa3f-d95e03efa8ee',
			user_id: '379a3353-d946-4927-a871-a1922702c779'
		},{
			content: "Irure dolor consectetur incididunt ut tempor nostrud tempor irure esse qui reprehenderit enim proident amet.",
			room_id: '2033193a-3355-492a-aa3f-d95e03efa8ee',
			user_id: '56970c1c-5982-4cae-865c-efec79b7b931'
		},{
			content: "Officia aliqua enim sit consectetur ipsum in ullamco magna.",
			room_id: '2033193a-3355-492a-aa3f-d95e03efa8ee',
			user_id: 'e11c6e87-63ac-45c0-ba74-456da4a59a98'
		}]).catch(function(err) {
			throw err;
		});
	}).catch(function(err) {
		throw err;
	});
};