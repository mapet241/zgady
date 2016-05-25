var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./backend/routes/userRouter.js');
var questionRouter = require('./backend/routes/questionRouter.js');
var authRouter = require('./backend/routes/authRouter.js');
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy  = require('passport-google-oauth').OAuth2Strategy;
var User = require('./backend/model/userModel.js');

passport.use(new GoogleStrategy({
        clientID: '630642664169-g6de16cjop9j9nu7t7aheccnali1inln.apps.googleusercontent.com',
        clientSecret: 'rpQb4zz06OM1bsh4Hv4ToC1q',
        callbackURL: 'http://localhost:3000/auth/callback'},
    function(req, accessToken, refreshToken, profile, done) {
        var query = {
            'google.id': profile.id
        };

        User.findOne(query, function (error, user) {
            if (user) {
                console.log('found');
                done(null, user);
            } else {
                var user = new User;

                user.email = profile.emails[0].value;
                user.image =
                    profile._json.profile_image_url;
                user.displayName = profile.displayName;

                user.google = {};
                user.google.id = profile.id;
                user.google.token = accessToken;
                user.save();
                done(null, user);
            }
        })
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
app.use('/auth', authRouter);

// Setup path to root html file
app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

// Run server
app.listen(3000, function () {
    console.log('Zgady are listening on port 3000');
});