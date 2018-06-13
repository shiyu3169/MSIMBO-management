var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	_id: String,
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	email: String,
	image: String,
	admin: Boolean,
	bio: String,
	github: String,
	linkedin: String,
	project: String,
	grades: [{
		name: String,
		score: Number,
	}],
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'});

module.exports = UserSchema;