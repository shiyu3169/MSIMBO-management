var mongoose = require('mongoose');

var WikiSchema = mongoose.Schema({
	name: String,
	src: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'wiki'});

module.exports = WikiSchema;