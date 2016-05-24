var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();

router.route('/callback')
    .get(passport.authenticate('google', {
        successRedirect: '/',
        failure: '/auth/error'
    }));

router.get('/loginGoogle', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email']
}));

router.get('/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
});

router.get('/logout', function (req, res) {
    req.logOut();
    res.redirect('/');
});

router.get('/error', function (req, res) {
    res.sendfile(path.resolve('public/views/authenticationError.html'));
});

module.exports = router;