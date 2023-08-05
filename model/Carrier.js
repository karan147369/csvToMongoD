const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarrierSchema = new Schema({
    csr: { type: String },
    policy_number: { type: String },
});

const Carrier = mongoose.model("Carrier", CarrierSchema);

module.exports = Carrier;
