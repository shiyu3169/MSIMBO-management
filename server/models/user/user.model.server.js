var mongoose = require("mongoose");
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUsers = findUsers;

function findUsers() {
	return UserModel.find();
}

function findUserById(uid) {
	return UserModel.findById(uid);
}

function findUserByCredentials(username, password) {
	return UserModel.findOne({username: username, password: password});
}

module.exports = UserModel;