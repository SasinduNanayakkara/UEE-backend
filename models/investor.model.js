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
    investments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Investment',
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Investor', InvestorSchema);