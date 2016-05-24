var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./backend/routes/userRouter.js');
var questionRouter = require('./backend/routes/questionRouter.js');
var apiRouter = require('./backend/routes/apiRouter.js');
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy  = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
        clientID: '247578003708-haqaadmkqnrbuptn6r7k82frnt38n74f.apps.googleusercontent.com',
        clientSecret: 'YiOTrEUZe0j68zU5qb0YdBFG',
        callbackURL: 'http://localhost:3000/auth/callback'},
    function(req, accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

// Connect to database
mongoose.connect('mongodb://localhost/zgady');

// Initialize express
var app = express();
app.use(express.static(__dirname + '/public'));

// Add all middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Setup passport

app.use(session({secret: 'anythingjustfornow'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.use('/api/users', userRouter);
app.use('/api/questions', questionRouter);
app.use('/auth', apiRouter);

// Setup path to root html file
app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

// Run server
app.listen(3000, function () {
    console.log('Zgady are listening on port 3000');
});