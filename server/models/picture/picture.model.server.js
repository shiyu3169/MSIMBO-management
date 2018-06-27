var mongoose = require("mongoose");
var PictureSchema = require('./picture.schema.server');
var PictureModel = mongoose.model('PictureModel', PictureSchema);

PictureModel.createPicture = createPicture;
PictureModel.findPictureForUser = findPictureForUser;
PictureModel.deletePictureForUser = deletePictureForUser;

function createPicture(picture) {
	return PictureModel.create(picture);
}

function findPictureForUser(uid) {
	return PictureModel.findOne({user: uid});
}

function deletePictureForUser(uid) {
	return PictureModel.remove({user:uid});
}

module.exports = PictureModel;