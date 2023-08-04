const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicySchema = new Schema({
    policy_number: {
        Type: String
    },
    premium_amount: { Type: Number },
    policy_type: { Type: String },
    policy_start_date: { Type: Date },
    policy_end_date: { Type: Date },
    policy_mode: { Type: Number }
})

const Policy = mongoose.model('Policy', PolicySchema);

module.exports = Policy;