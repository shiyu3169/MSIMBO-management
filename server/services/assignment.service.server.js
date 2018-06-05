module.exports = function (app) {
	app.get("/api/user", findAssignments);

	var users = [
		{ _id: '1', name: 'Assignment 1', src="https://docs.google.com/document/d/e/2PACX-1vTmO2soTz5q4US5Prw0H7VZGr0df52mc-3LltYz1vc3G5hi9AU3bTqffAEYNlaBbSa5tiimfjpvNeWJ/pub?embedded=true"},
		{ _id: '2', name: 'Assignment 2', src="https://docs.google.com/document/d/e/2PACX-1vTdPMnNpEHcvSPCPu3iloM0i89qn9HDMZ4dGY1T9QuJWu4RBZi1B28OYJMZqA9hJaoyAEZAPl-S9UCY/pub?embedded=true"},
		{ _id: '3', name: 'Assignment 3', src="https://docs.google.com/document/d/e/2PACX-1vTwvObJrZAsD62wZbGv5gfRS9f50Jf2QynIW1QSOAGiYvA_88HpbIDNa2U3CYS81ika6OIHKdIBjLeH/pub?embedded=true"},
		{ _id: '4', name: 'Assignment 4', src="https://docs.google.com/document/d/e/2PACX-1vSe5VqKG5FIyfS2o7Vu6PXrkRh_MK64aGfyhhxEloa-8KZliCZrCRsMrFB7Y3qMFiY_XSQ54pc5yJib/pub?embedded=true"},
		{ _id: '5', name: 'Assignment 5', src="https://docs.google.com/document/d/e/2PACX-1vTGVMWhQjKwvmHsRflQbrPUXtEWn8jcxYaF95YDoqIyI86C-T17979Z5YmL-lulyyaodbQ8XoOpTTMt/pub?embedded=true"},	
	]

	function findUsers(req, res) {
    	res.json(assignments);
	}
}