var express = require("express");
const bcrypt = require("bcrypt");
const { isValidObjectId } = require("mongoose");
var router = express.Router();
var mongoose = require("mongoose");
const InventionModel = require("../models/invention");

//Add Inventions
const createInvention = (req, res, next) => {
  const Invention = new InventionModel({
    inventorId: req.query.inventorId,
    title: req.body.title,
    description: req.body.description,
    // image : req.body.image,
    // date : req.body.date,
    // goal : req.body.goal,
    // currentInvestment : req.body.currentInvestment,
    // approval : 'Pending',
    // organization : req.body.organization,
    // investment : req.body.investment,
    // rate : 'like'
  });

  try {
    Invention.save();
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

//update Invention
const updateInvention = async (req, res, next) => {
  InventionModel.updateOne(
    { _id: req.query.id },
    { $set: { title: req.body.title, description: req.body.description } }
  )
    .then((result) => {
      res.json({
        success: true,
        message: "Updated sucessful",
        payload: {},
      });
    })
    .catch((e) => {
      res.status(400).json({
        success: false,
        message: e.message,
        payload: {},
      });
    });
};

//get all inventions
const getAllInventions = (req, res, next) => {
  InventionModel.find({ inventorId: req.query.inventorId })
    .then((Invention) => {
      res.status(200).json({
        success: true,
        message: "Read successfuly",
        Invention,
      });
    })
    .catch((e) => {
      res.status(400).json({ success: false, message: e.message, payload: {} });
    });
};

//Delete Invention
const deleteInvention = async (req, res) => {
  try {
    const id = req.query.id;
    const deletedInvention = await InventionModel.findByIdAndDelete(id);
    if (deletedInvention) {
      res.status(200).json(deletedInvention);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createInvention,
  updateInvention,
  getAllInventions,
  deleteInvention,
};
