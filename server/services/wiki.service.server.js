module.exports = function (app) {

	const wikiModel = require("../models/wiki/wiki.model.server")

	app.get("/api/wiki", findWikis);
	app.get("/api/wiki/:wid", findWikiById);

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
				res.json(wiki);
			}
		)
	}
}