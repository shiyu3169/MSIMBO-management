var mongoose = require("mongoose");
var AssignmentSchema = require('./assignment.schema.server');
var AssignmentModel = mongoose.model('AssignmentModel', AssignmentSchema);

AssignmentModel.findAssignments = findAssignments;
AssignmentModel.findAssignemntById = findAssignemntById;

function findAssignments() {
		return AssignmentModel.find();
}

function findAssignemntById(aid) {
	return AssignmentModel.findById(aid);
}

module.exports = AssignmentModel;