module.exports = function (app) {
	const gradeModel = require("../models/grade/grade.model.server");

	app.post("/api/grade", createGrade);
	app.get("/api/grade/:uid", findGradeForUser);
	app.get("/api/grade", findAllGrade);
	app.put("/api/grade/:gid", updateGrade);
	app.delete("/api/grade/:gid", deleteGrade);

	function createGrade(req, res) {
		const grade = req.body;
		gradeModel.createGradeForUser(grade).then(
			(data) => {
				res.json(data);
			}
		)
	}

	function findGradeForUser(req, res) {
		const uid = req.params['uid'];
		gradeModel.findGradeForUser(uid).then(
			(data) => {
				res.json(data);
			}
		)
	}

	function findAllGrade(req, res) {
		gradeModel.findAllGrade().then(
			(data) => {
				res.json(data);
			}
		)
	}

	function updateGrade(req, res) {
		const gid = req.params['gid'];
		const grade = req.body;
		gradeModel.updateGrade(gid, grade).then(
			(data) => {
				res.json(data);
			}
		)
	}

	function deleteGrade(req, res) {
		const gid = req.params['gid'];
		gradeModel.deleteGrade(gid).then(
			(data) => {
				res.json(data);
			}
		)
	}
}