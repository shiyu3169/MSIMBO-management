var mongoose = require('mongoose');

var AssignmentSchema = mongoose.Schema({
	_id: String,
	name: String,
	due: String,
	src: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'assignment'});

module.exports = AssignmentSchema;