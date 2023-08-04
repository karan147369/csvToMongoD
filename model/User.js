const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  city: { type: String },
  phone: { type: String },
  policy_number: { type: String },
  type: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
