var mongoose = require("mongoose");
var AssignmentSchema = require('./assignment.schema.server');
var AssignmentModel = mongoose.model('AssignmentModel', AssignmentSchema);

AssignmentModel.findAssignments = findAssignments;
AssignmentModel.findAssignemntById = findAssignemntById;
AssignmentModel.createAssignment = createAssignment;
AssignmentModel.updateAssignment = updateAssignment;
AssignmentModel.deleteAssignment = deleteAssignment;

function findAssignments() {
	return AssignmentModel.find().sort({name: 1});
}

function findAssignemntById(aid) {
	return AssignmentModel.findById(aid);
}

function createAssignment(assignment) {
	return AssignmentModel.create(assignment);
}

function updateAssignment(aid, assignment) {
	return AssignmentModel.update({_id: aid}, assignment);
}

function deleteAssignment(aid) {
	return AssignmentModel.remove({_id: aid});
}

module.exports = AssignmentModel;