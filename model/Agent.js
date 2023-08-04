const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    agent: { Type: String },
    producer: { Type: String },
    policy_number: { Type: String }
})

const Agent = mongoose.model('Agent', AgentSchema);

module.exports = Agent;