var mongoose = require("mongoose");
var GradeSchema = require('./grade.schema.server');
var GradeModel = mongoose.model('GradeModel', GradeSchema);

module.exports = GradeModel;