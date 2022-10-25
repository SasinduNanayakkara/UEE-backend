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
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true,
    },
    nic: {
        type: string,
        required: true
    },
    nicImage: {
        type: string,
        required: false
    },
    address: {
        type: string,
        required: true
    },
    occupation: {
        type: string,
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