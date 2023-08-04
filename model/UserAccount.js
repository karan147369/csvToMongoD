const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
  account_name: { type: String },
  account_type: { type: String },
  firstname: { type: String },
  policy_number: { type: String },
});

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

module.exports = UserAccount;
