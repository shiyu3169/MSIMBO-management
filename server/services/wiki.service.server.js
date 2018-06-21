module.exports = function (app) {

	const wikiModel = require("../models/wiki/wiki.model.server")

	app.get("/api/wiki", findWikis);
	app.get("/api/wiki/:wid", findWikiById);
	app.put("/api/wiki/:wid", updateWiki);
	app.delete("/api/wiki/:wid", deleteWiki);
	app.post("/api/wiki", createWiki);

	function createWiki(req, res) {
		const wiki = req.body;
		wikiModel.createWiki(wiki).then(
			(wiki) => {
				res.json(wiki);
			}
		)
	}

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

	function updateWiki(req, res) {
		const wid = req.params['wid'];
		const wiki = req.body;
		wikiModel.updateWiki(wid, wiki).then(
			(data) => {
				res.send(data);
			}
		)
	}

	function deleteWiki(req,res) {
		const wid = req.params['wid'];
		wikiModel.deleteWiki(wid).then(
			(data) => {
				res.send(data);
			}
		)
	}
}