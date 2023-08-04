const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicySchema = new Schema({
  policy_number: {
    Type: String,
  },
  premium_amount: { type: Number },
  policy_type: { type: String },
  policy_start_date: { type: Date },
  policy_end_date: { type: Date },
  policy_mode: { type: Number },
});

const Policy = mongoose.model("Policy", PolicySchema);

module.exports = Policy;
