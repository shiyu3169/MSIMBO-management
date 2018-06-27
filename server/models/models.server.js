var connectionString = 'mongodb://127.0.0.1:27017/management'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds0000.mlab.com:0000/XXXXX'; // use yours
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString);

module.exports = db;