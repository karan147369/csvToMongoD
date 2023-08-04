const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarrierSchema = new Schema({
    csr: { Type: String },
    policy_number: { Type: String }
})

const Carrier = mongoose.model('Carrier', carrierSchema);

module.exports = Carrier;