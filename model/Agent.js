const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
  agent: { type: String },
  producer: { type: String },
  policy_number: { type: String },
});

const Agent = mongoose.model("Agent", AgentSchema);

module.exports = Agent;
