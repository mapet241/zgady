var mongoose = require('mongoose');
Schema = mongoose.Schema;

var AnswerSchema = require('./answerModel');

var QuestionSchema = new Schema({
    questionText: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    answered: { type: Boolean, required: true, default: false },
    answers: [ AnswerSchema ]
});

module.exports = mongoose.model('Question', QuestionSchema);