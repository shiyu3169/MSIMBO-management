module.exports = function (app) {
  require("./services/user.service.server")(app);
  require("./services/assignment.service.server")(app);
};