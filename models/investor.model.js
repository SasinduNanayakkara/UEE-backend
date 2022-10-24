const mongoose = require('mongoose');

const InvestorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    phone: {
        type: string,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Investor', InvestorSchema);