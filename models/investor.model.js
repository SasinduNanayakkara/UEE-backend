const mongoose = require('mongoose');

const InvestorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true
    },
    nicImage: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    approvalStatus: {
        type: Boolean,
    },
}, { timestamps: true });

module.exports = Investor = mongoose.model('Investor', InvestorSchema);