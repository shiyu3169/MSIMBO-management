module.exports = function (app) {

    var multer = require('multer');
    var upload = multer({ dest: './dist/assets/uploads' });

	app.get("/api/user", findUsers);
    app.get("/api/user/:uid", findUserById);
    app.post ("/api/user/:uid/upload", upload.single('image'), uploadImage);
    var users = [
        { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice',  lastName: 'Wonder', email: 'alice@gmail.com', admin: false, image:'/assets/uploads/user.png', bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", github:"", linkedin:"", project:"", grades: []},
        { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob',  lastName: 'Wang', email: 'bob@gmail.com', admin: false, image:'/assets/uploads/user.png', bio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", github:"https://github.com/swang92711", linkedin:"https://www.linkedin.com/in/shiyu-wang-2541478b", project:"https://msimbo.herokuapp.com", grades: [{name: "assignment 1", score: 100}, {name: "assignment 2", score: 80}]},
        { _id: '666', username: 'swang', password: 'Cliff92813!', firstName: 'Shiyu',  lastName: 'Wang', email: 'shiyu3169@gmail.com', admin: true, image:'/assets/uploads/user.png', bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", github:"", linkedin:"", project:"", grades: [] }
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

    function selectUserById(uid) {
        return users.find(
            user=> {
                return user._id === uid
            }
        )
    }

    function findUserById(req, res) {
        const uid = req.params['uid'];
        const user = selectUserById(uid);
        res.json(user);
    }

    function uploadImage(req, res) {
        const uid = req.params['uid'];
        const image = req.file;
        let user = selectUserById(uid);
        user.image = '/assets/uploads/' + image.filename;
        var callbackUrl   = req.headers.origin + "/user/" + uid;
        res.redirect(callbackUrl);
    }
}