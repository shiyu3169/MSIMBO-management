var mongoose = require("mongoose");
var WikiSchema = require('./wiki.schema.server');
var WikiModel = mongoose.model('WikiModel', WikiSchema);

WikiModel.findWikis = findWikis;
WikiModel.findWikiById = findWikiById;

function findWikis() {
		return WikiModel.find();
}

function findWikiById(wid) {
	return WikiModel.findById(wid);
}

module.exports = WikiModel;