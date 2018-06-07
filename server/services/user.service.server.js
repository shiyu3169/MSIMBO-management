module.exports = function (app) {

	app.get("/api/user", findUsers);
  app.get("/api/user/:uid", findUserById);


	var users = [
  { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice',  lastName: 'Wonder', email: 'alice@gmail.com', admin: false, image:'public/user.png', bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob',  lastName: 'Wang', email: 'bob@gmail.com', admin: false, image:'public/user.png', bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { _id: '666', username: 'swang', password: 'Cliff92813!', firstName: 'Shiyu',  lastName: 'Wang', email: 'shiyu3169@gmail.com', admin: true, image:'public/user.png', bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
  ]

  function findUsers(req, res) {
      var username = req.query['username'];
      var password = req.query['passowrd'];
      if(username && password) {
        var user = users.find(function (user) {
          return user.username === username && user.password === password;
      });
        res.json(user);
        return;
    } else if(username) {
        var user = users.find(function (user) {
          return user.username === username;
      });
        res.json(user);
        return;
    }
    res.json(users);
}

    function findUserById(req, res) {
        const uid = req.params['uid'];
        const user = users.find(
            user=> {
                return user._id === uid
            }
        )
        res.json(user);
    }
}