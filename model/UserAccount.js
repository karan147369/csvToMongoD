const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
    account_name: { Type: String },
    account_type: { Type: String },
    firstname: { Type: String },policy_number: { Type: String }

})

const UserAccount = mongoose.model('UserAccount', UserAccountSchema);

module.exports = UserAccount;