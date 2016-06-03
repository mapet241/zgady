var mongoose = require('mongoose');
Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerText: { type: String, required: true },
    answeredBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    correct: { type: Number, required: true, default: 0 }
});

module.exports = AnswerSchema;