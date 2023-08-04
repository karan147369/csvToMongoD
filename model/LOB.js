const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LOBSchema = new Schema({
    category_name: { Type: String },
    company_name: { Type: String },
    policy_number: { Type: String }
})

const LOB = mongoose.model('LOB', LOBSchema);

module.exports = LOB;