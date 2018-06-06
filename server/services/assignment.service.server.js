module.exports = function (app) {
	app.get("/api/assignment", findAssignments);
	app.get("/api/assignment/:aid", findAssignemntById);

	var assignments = [
		{ _id: '123', name: 'Assignment 1', due:"April 23, 2018", src: "https://docs.google.com/document/d/e/2PACX-1vTmO2soTz5q4US5Prw0H7VZGr0df52mc-3LltYz1vc3G5hi9AU3bTqffAEYNlaBbSa5tiimfjpvNeWJ/pub?embedded=true"},
		{ _id: '234', name: 'Assignment 2', due:"May 7, 2018", src: "https://docs.google.com/document/d/e/2PACX-1vTdPMnNpEHcvSPCPu3iloM0i89qn9HDMZ4dGY1T9QuJWu4RBZi1B28OYJMZqA9hJaoyAEZAPl-S9UCY/pub?embedded=true"},
		{ _id: '345', name: 'Assignment 3', due:"May 21, 2018", src: "https://docs.google.com/document/d/e/2PACX-1vTwvObJrZAsD62wZbGv5gfRS9f50Jf2QynIW1QSOAGiYvA_88HpbIDNa2U3CYS81ika6OIHKdIBjLeH/pub?embedded=true"},
		{ _id: '456', name: 'Assignment 4', due:"June 4, 2018", src: "https://docs.google.com/document/d/e/2PACX-1vSe5VqKG5FIyfS2o7Vu6PXrkRh_MK64aGfyhhxEloa-8KZliCZrCRsMrFB7Y3qMFiY_XSQ54pc5yJib/pub?embedded=true"},
		{ _id: '567', name: 'Assignment 5', due:"June 18, 2018", src: "https://docs.google.com/document/d/e/2PACX-1vTGVMWhQjKwvmHsRflQbrPUXtEWn8jcxYaF95YDoqIyI86C-T17979Z5YmL-lulyyaodbQ8XoOpTTMt/pub?embedded=true"},
		{ _id: '678', name: 'Project', due:"Aug 13, 2018", src: "https://docs.google.com/document/d/e/2PACX-1vRpC6FLNDlNkuOGtFYKL1msrQaOj3cVIEnAS6TvcVdanMdwdxgeFxl4-Z4USu8MRP0xkeqYCGi1_kz5/pub?embedded=true"}	
	]

	function findAssignments(req, res) {
		// console.log(assignments);
    	res.json(assignments);
	}

	function findAssignemntById(req, res) {
		const aid = req.params['aid'];
		const assignment = assignments.find(
			assignment=> {
				return assignment._id === aid
			}
		)
		res.json(assignment);
	}
}