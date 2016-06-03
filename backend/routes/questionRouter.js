var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var User = require('../model/userModel.js');
var Question = require('../model/questionModel.js');
var AnswerSchema = require('../model/answerModel.js');
var Answer = mongoose.model('Answer', AnswerSchema);

var auth = function (req, res, next) {
    if (!req.isAuthenticated()) {
        res.send(401);
    } else next();
};

router.use(auth);

router.get('/', function(req, res) {
    Question.find(function(err, questions) {
        if (err) {
            res.json({info: 'Error finding questions', error: err});
        };
        res.json({data: questions});
    });
});

router.get('/:userId', function (req, res) {
    Question.find({author: req.params.userId}, function(err, questions) {
        if (err) {
            res.json({info: 'Error finding questions for user: ' + req.params.userId,
                error: err});
        }
        if (questions) {
            res.json({data: questions});
        }
    });
});

router.post('/:userId', function (req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.json({info: 'Error finding user with id: ' + req.params.userId,
                error: err});
        }
        if (user) {

            var newQuestion = new Question({
                questionText: req.body.questionText,
                author: user._id,
                answered: req.body.answered
            });

            newQuestion.save(function(err, question) {
                if (err) {
                    res.json({info: 'Error creating question', error: err});
                } else {
                    res.json({info: 'Question created successfully', error: err});
                }
            });
        }
    });
});


router.post('/:questionId/answer', function (req, res) {
    Question.findById(req.params.questionId, function(err, question) {
        if (err) {
            res.json({info: 'Error finding question with id: ' + req.params.questionId,
                error: err
            });
        }
        if (question) {
            var newAnswer = new Answer({
                answerText: req.body.answerText,
                answeredBy: '574309ce02ab5c1c1302747d'
            });

            question.answers.push(newAnswer);
            question.save(function(err, question) {
                if (err) {
                    res.json({info: 'Error creating question', error: err});
                } else {
                    res.json({info: 'Question created successfully', error: err});
                }
            });
        }
    });
});


module.exports = router;