var mongoose = require("mongoose");
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUsers = findUsers;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

function findUsers() {
	return UserModel.find();
}

function findUserById(uid) {
	return UserModel.findById(uid);
}

function findUserByCredentials(username, password) {
	return UserModel.findOne({username: username, password: password});
}

function findUserByUsername(username){
	return UserModel.findOne({username: username});
}

function updateUser(uid, user) {
  return UserModel.update({_id: uid}, user);
}

function deleteUser(uid) {
  return UserModel.remove({_id: uid});
}


module.exports = UserModel;