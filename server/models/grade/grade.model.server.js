var mongoose = require("mongoose");
var GradeSchema = require('./grade.schema.server');
var GradeModel = mongoose.model('GradeModel', GradeSchema);

GradeModel.createGradeForUser = createGradeForUser;
GradeModel.findGradeForUser = findGradeForUser;
GradeModel.findAllGrade = findAllGrade;
GradeModel.updateGrade = updateGrade;
GradeModel.deleteGrade = deleteGrade;

function createGradeForUser(grade) {
	return GradeModel.create(grade);
}

function findGradeForUser(uid) {
	return GradeModel.find({user: uid}).sort({name: 1});
}

function findAllGrade() {
	return GradeModel.find();
}

function updateGrade(gid, grade) {
	return GradeModel.update({_id:gid}, grade);
}
 
function deleteGrade(gid) {
	return GradeModel.remove({_id: gid});
}

module.exports = GradeModel;