module.exports = function (app) {

	const assignmentModel = require("../models/assignment/assignment.model.server")

	app.get("/api/assignment", findAssignments);
	app.get("/api/assignment/:aid", findAssignemntBy);


	

	function findAssignments(req, res) {
		assignmentModel.findAssignments().then(
			(assignments) => {
				res.json(assignments);
			}
		);
	}

	function findAssignemntBy(req, res) {
		const aid = req.params["aid"];
		assignmentModel.findAssignemntById(aid).then(
			(assignment) => {
				res.json(assignment);
			}
		)
	}
}