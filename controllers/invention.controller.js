var express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();
var mongoose = require('mongoose');
const InventionModel = require('../models/invention');

//Add Inventions
const createInvention = (req, res, next)=>{

    const Invention= new InventionModel({
        inventionId : req.body.inventionId,
        inentorId : req.query.inentorId,
        title : req.body.title,
        description : req.body.description,
        image : req.body.image,
        date : req.body.date,
        goal : req.body.goal,
        currentInvestment : req.body.currentInvestment,
        approval : 'Pending',
        organization : req.body.organization,
        investment : req.body.investment,
        rate : 'like'
    });

    try{
        Invention.save();
        res.status(200).json(
          {
            succuss: true,
            message: 'Insertion succussfull',
            payload: {}
          }
        );
      }
      catch (error) {
        res.status(400).json(
          {
            message: 'Cannot add data right now!'
          }
        );
      }
};

module.exports = {
    createInvention
  }