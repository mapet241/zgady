var mongoose = require('mongoose');
Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerText: { type: String, required: true },
    answeredBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    correct: { type: Boolean, required: true, default: false }
});

module.exports = AnswerSchema;