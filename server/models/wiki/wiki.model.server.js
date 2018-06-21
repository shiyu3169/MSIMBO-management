var mongoose = require("mongoose");
var WikiSchema = require('./wiki.schema.server');
var WikiModel = mongoose.model('WikiModel', WikiSchema);

WikiModel.findWikis = findWikis;
WikiModel.findWikiById = findWikiById;
WikiModel.updateWiki = updateWiki;
WikiModel.deleteWiki = deleteWiki;
WikiModel.createWiki = createWiki;

function createWiki(wiki) {
	return WikiModel.create(wiki);
}

function findWikis() {
	return WikiModel.find();
}

function findWikiById(wid) {
	return WikiModel.findById(wid);
}

function updateWiki(wid, wiki) {
	return WikiModel.update({_id: wid}, wiki);
}

function deleteWiki(wid) {
	return WikiModel.remove({_id: wid});
}

module.exports = WikiModel;