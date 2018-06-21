module.exports = function (app) {

	const assignmentModel = require("../models/assignment/assignment.model.server")

	app.get("/api/assignment", findAssignments);
	app.get("/api/assignment/:aid", findAssignemntById);
	app.post("/api/assignment", createAssignment);
	app.put("/api/assignment/:aid", updateAssignment);
	app.delete("/api/assignment/:aid", deleteAssignment);

	

	function findAssignments(req, res) {
		assignmentModel.findAssignments().then(
			(assignments) => {
				res.json(assignments);
			}
		);
	}

	function findAssignemntById(req, res) {
		const aid = req.params["aid"];
		assignmentModel.findAssignemntById(aid).then(
			(assignment) => {
				res.json(assignment);
			}
		)
	}

	function createAssignment(req, res) {
		const ass = req.body;
		assignmentModel.createAssignment(ass).then(
			(data) => {
				res.json(data);
			}
		);
	}

	function updateAssignment(req, res) {
		const aid = req.params['aid'];
		const ass = req.body;
		assignmentModel.updateAssignment(aid, ass).then(
			(data) => {
				res.send(data);
			}
		);
	}

	function deleteAssignment(req, res) {
		const aid = req.params['aid'];
		assignmentModel.deleteAssignment(aid).then(
			(data) => {
				res.send(data);
			}
		);
	}
}