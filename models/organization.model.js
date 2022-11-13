const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const organizationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  app_nic: {
    type: String,
    required: true,
  },
  app_name: {
    type: String,
    required: true,
  },
  app_nic_img: {
    type: String,
    required: true,
  },
  app_position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  approval: {
    type: String,
    required: true,
  },
  requested: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "invention",
  },
  added: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "invention",
  }
});

//Export the model
module.exports = mongoose.model("Organization", organizationSchema);
