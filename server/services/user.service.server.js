module.exports = function (app) {

    const userModel = require('../models/user/user.model.server');
    const pictureModel = require('../models/picture/picture.model.server');

    var fs = require('fs');

    const passport = require('passport');
    let LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    const multer = require('multer');
    const upload = multer({ dest: './dist/assets/uploads' });

    app.post("/api/user", createUser)
	app.get("/api/user", findUsers);
    app.get("/api/user/:uid", findUserById);
    app.post("/api/user/:uid/upload", upload.single('image'), uploadImage);
    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout', logout);
    app.post('/api/loggedIn', loggedIn);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);
    app.get('/api/user/:uid/picture', downloadPic)

    passport.use(new LocalStrategy(localStrategy));

    function localStrategy(username, password, done) {
        userModel.findUserByCredentials(username, password).then(
            (user) => {
                if(user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            }
        )
   }

   function downloadPic(req, res) {
        var uid = req.params['uid'];
        pictureModel.findPictureForUser(uid).then(
            picture => {
                if(picture) {
                    fs.access(picture.name, fs.constants.F_OK, (err) => {
                        if(err) {
                            fs.appendFile(picture.name, picture.data, (err) =>{
                            })
                        }
                    });
                }
                res.json(null);
            }
        );
   }

    function loggedIn(req, res) {
        if(req.isAuthenticated()) {
            res.json(req.user);
        } else {
            res.send('0');
        }
    }

   function login(req, res) {
        res.json(req.user);
   }

   function logout(req, res) {
        req.logOut();
        res.sendStatus(200);
   }


    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel.findUserById(user._id).then(
            (user) => {
                done(null, user);
            },
            (err) => {
                done(err, null);
            }
        )
    }
    
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

        const callbackUrl   = req.headers.origin + "/user";
        const picture = {
            name: image.path,
            data: "",
            mimetype: image.mimetype,
            user: uid
        }

        fs.readFile(picture.name, (err, data) => {
            picture.data = data;
            pictureModel.deletePictureForUser(uid).then(
                pictureModel.createPicture(picture).then(
                    (picture) => {
                        userModel.findUserById(uid).then(
                            (user) => {
                                user.image = '/assets/uploads/' + image.filename;
                                userModel.updateUser(uid, user).then(
                                    (data) => {
                                        res.redirect(callbackUrl);
                                    }
                                );
                            }
                        );     
                    }
                )
            )
        })    
    }

    function updateUser(req, res) {
        const uid = req.params['uid'];
        const user = req.body
        userModel.updateUser(uid, user).then(
            (data) => {
                res.send(data);
            }
        )
    }

    function deleteUser(req, res) {
        const uid = req.params['uid'];
        userModel.deleteUser(uid).then(
            (data) => {
                res.send(data);
            }
        )
    }
}