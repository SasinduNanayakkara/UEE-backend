const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  inventionId: {
    required: true,
    type: String,
  },
  inentorId: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Number,
  },
  goal: {
    required: true,
    type: String,
  },
  currentInvestment: {
    required: true,
    type: Number,
  },
  approval: {
    required: true,
    type: Boolean,
  },
  organization: {
    required: true,
    type: String,
  },
  investment: {
    required: true,
    type: String,
  },
  rate: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("invention", dataSchema);