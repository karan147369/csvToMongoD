const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: { Type: String },
    city: { Type: String },
    phone: { Type: String },
    type: { Type: String },
    policy_number: { Type: String },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;