var mongoose = require('mongoose');
Schema = mongoose.Schema;

var UserSchema = new Schema({
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    facebook: { type: Object },
    google: { type: Object }
});

module.exports = mongoose.model('User', UserSchema);