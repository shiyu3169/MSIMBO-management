const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
// var enforce = require('express-sslify');

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
// app.use(enforce.HTTPS());

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

app.use(cookieParser());
if(process.env.SESSION_SECRET) {
	app.use(session({ 
		secret: process.env.SESSION_SECRET,
		resave: true,
    	saveUninitialized: true }));
} else {
	app.use(session({ 
		secret: 'test',
		resave: true,
    	saveUninitialized: true}));
}

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

require("./server/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// app.get('*',function(req,res,next){
//   if(req.headers['x-forwarded-proto']!='https')
//     res.redirect('https://mypreferreddomain.com'+req.url)
//   else
//     next() /* Continue to other routes if we're not redirecting */
// })

// server.listen(port);
server.listen( port , function() {console.log('Running on ' + app.get('port'));});

// http.createServer(app).listen(app.get('port'), function() {
//     console.log('Express server listening on port ' + app.get('port'));
// });