var mongoose = require('mongoose');

var GradeSchema = mongoose.Schema({
	name: String,
	grade: Number,
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'grade'});

module.exports = GradeSchema;