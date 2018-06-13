module.exports = function (app) {

	const wikiModel = require("../models/wiki/wiki.model.server")

	app.get("/api/wiki", findWikis);
	app.get("/api/wiki/:wid", findWikiById);

	// var wikis = [
	// 	{"name": "Angular SPA Structure for Assignment", "src": "https://docs.google.com/document/d/e/2PACX-1vQ6g7Y1v4A_vwpo9v_k9bxAyImvAvt_Tt1ZH3hUFf7O56iaB36JRFkYO1qPxUPZv8mAvneRYX3axHcW/pub?embedded=true"},
	// 	{"name": "Installation Guide", "src": "https://docs.google.com/document/d/e/2PACX-1vTCtUIoIyy1CI_Fjds82uGFVe-QfRCpqIx0jd9zj-5mYcvPo2yynSAgFgA8ta8t3toTsOnLNGVjS1vb/pub?embedded=true"}
	// ];

	function findWikis(req, res) {
		wikiModel.findWikis().then(
			(wikis) => {
				res.json(wikis);
			}
		)
	}

	function findWikiById(req, res) {
		const wid = req.params['wid'];
		wikiModel.findWikiById(wid).then(
			(wiki) => {
				console.log(wiki);
				res.json(wiki);
			}
		)
	}
}