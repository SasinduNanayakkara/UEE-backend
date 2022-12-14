var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const InventorModel = require("../models/inventor");

const createInventor = (req, res, next) => {
  const Inventor = new InventorModel({
    username: req.body.username,
    email: req.body.email,
    // password : req.body.password,
    NIC: req.body.NIC,
    // NICImage : req.body.NICImage,
    name: req.body.name,
  });

  try {
    Inventor.save();
    res.status(200).json({
      succuss: true,
      message: "Insertion succussfull",
      payload: {},
    });
  } catch (error) {
    res.status(400).json({
      message: "Cannot add data right now!",
    });
  }
};

const getInventorDetails = (req, res) => {
  InventorModel.find({_id:req.query.id}).then((Inventor) => {
    res.status(200).json({
      success: true,
        message: "Read successfuly",
        Inventor,
    });
  })
  .catch((e) => {
    res.status(400).json({ success: false, message: e.message, payload: {} });
  });
};

module.exports = {
  createInventor,
  getInventorDetails,
};
