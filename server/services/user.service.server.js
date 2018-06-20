module.exports = function (app) {

    const userModel = require('../models/user/user.model.server');

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
    app.put('/api/user/:uid', updateuser);

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

    function updateuser(req, res) {
        const uid = req.params['uid'];
        var user = req.body
        userModel.updateUser(uid, user).then(
            (data) => {
                res.send(data);
            }
        )
    }
}