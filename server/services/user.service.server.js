module.exports = function (app) {

    const userModel = require('../models/user/user.model.server');

    const multer = require('multer');
    const upload = multer({ dest: './dist/assets/uploads' });

    app.post("/api/user", createUser)
	app.get("/api/user", findUsers);
    app.get("/api/user/:uid", findUserById);
    app.post("/api/user/:uid/upload", upload.single('image'), uploadImage);
    
    function createUser(req, res) {
        const newUser = req.body;
        userModel.createUser(newUser).then(
            (user) => {
                res.json(user);
            }
        );
    }

    function findUsers(req, res) {
        const username = req.query['username'];
        const password = req.query['password'];
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
        const callbackUrl   = req.headers.origin + "/user/" + uid;
        res.redirect(callbackUrl);
    }
}