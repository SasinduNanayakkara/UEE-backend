const mongoose = require("mongoose");

const InventionSchema = new mongoose.Schema({
  inventorId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  // date: {
  //   required: true,
  //   type: Number,
  // },
  // goal: {
  //   required: true,
  //   type: String,
  // },
  // currentInvestment: {
  //   required: true,
  //   type: Number,
  // },
  // approval: {
  //   required: true,
  //   type: Boolean,
  // },
  // organization: {
  //   required: true,
  //   type: String,
  // },
  // investment: {
  //   required: true,
  //   type: String,
  // },
  // rate: {
  //   required: true,
  //   type: Boolean,
  // },
});

module.exports = mongoose.model("invention", InventionSchema);
