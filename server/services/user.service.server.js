module.exports = function (app) {

    var userModel = require('../models/user/user.model.server');

    var multer = require('multer');
    var upload = multer({ dest: './dist/assets/uploads' });

	app.get("/api/user", findUsers);
    app.get("/api/user/:uid", findUserById);
    app.post ("/api/user/:uid/upload", upload.single('image'), uploadImage);
    

    function findUsers(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        if(username && password) {
            userModel.findUserByCredentials(username, password).then(
                (user) => {
                    res.json(user)
                }
            );   
            return;
            } else if(username) {
            userModel.findUserByUsername(username).then(
                (user) => {
                    res.json(user);
                }
            )
            return;
        }
        userModel.findUsers().then(
            (users) => {
                res.json(users)
            }
        );
    }

    function findUserById(req, res) {
        const uid = req.params['uid'];
        userModel.findUserById(uid).then(
            (user) => {
                res.json(user)
            }
        );
    }

    function uploadImage(req, res) {
        const uid = req.params['uid'];
        const image = req.file;
        let user = userModel.findUserById(uid);
        user.image = '/assets/uploads/' + image.filename;
        userModel.updateUser(uid, user).then(
            () => {res.json(null)}
        );
        var callbackUrl   = req.headers.origin + "/user/" + uid;
        res.redirect(callbackUrl);
    }
}