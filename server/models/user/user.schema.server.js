var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	email: String,
	image: String,
	admin: {type: Boolean, default: false},
	bio: String,
	github: String,
	linkedin: String,
	project: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'user'});

module.exports = UserSchema;