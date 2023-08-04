const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LOBSchema = new Schema({
  category_name: { type: String },
  company_name: { type: String },
  policy_number: { type: String },
});

const LOB = mongoose.model("LOB", LOBSchema);

module.exports = LOB;
