module.exports = function (app) {
  require("./services/user.service.server")(app);
  require("./services/assignment.service.server")(app);
  require("./services/wiki.service.server")(app);
   require("./services/grade.service.server")(app);
  require("./models/models.server");
};