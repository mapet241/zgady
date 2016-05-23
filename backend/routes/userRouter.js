var express = require('express');

var router = express.Router();

var User = require('../model/userModel.js');

router.get('/', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            res.json({info: 'error during finding Users', error: err});
        };
        res.json({info: 'Users found successfully', data: users});
    });
});

router.get('/:userId', function (req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.json({info: 'Error finding user with id: ' + req.params.userId,
                error: err});
        }
        if (user) {
            res.json({info: 'User found successfully', data: user});
        }
    });
});

router.post('/', function (req, res) {

    var newUser = new User({
        displayName: req.body.displayName,
        email: req.body.email,
        facebook: req.body.facebook,
        google: req.body.google
    });

    newUser.save(function(err) {
        if (err) {
            res.json({info: 'Error creating user', error: err});
        } else {
            res.json({info: 'User created successfully'});
        }
    });

});

module.exports = router;