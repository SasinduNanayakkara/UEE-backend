const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const investmentSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    paid: {
        type: Boolean,
        required: true,
        default: false,
    },
    investorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investor",
    },
    inventionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invention",
    }
}, {timestamps: true});

module.exports= Investment = mongoose.model("Investment", investmentSchema);