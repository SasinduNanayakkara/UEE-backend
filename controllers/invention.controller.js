var express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();
var mongoose = require('mongoose');
const InventionModel = require('../models/invention');

//Add Inventions
const createInvention = (req, res, next)=>{

    const Invention= new InventionModel({
        // inentorId : req.query.inentorId,
        title : req.body.title,
        description : req.body.description,
        // image : req.body.image,
        // date : req.body.date,
        // goal : req.body.goal,
        // currentInvestment : req.body.currentInvestment,
        // approval : 'Pending',
        // organization : req.body.organization,
        // investment : req.body.investment,
        // rate : 'like'
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

// const updateInvention = (res,req,next)=>{

//     InventionModel.updateOne({ _id : req.query.id },
//     {
//       $set: {
//         "title": req.body.title,
//         "description": req.body.description,
//         // "image": req.body.image,
//         // "date": req.body.date,
//         // "goal": req.body.goal,
//         // "currentInvestment": req.body.currentInvestment
//       }
//     })
//     .then((result) => {
     
//       res.json({
//         success: true,
//         message: 'Update sucessful',
//         payload: result
//       })
//     }).catch((e) => {
//       res.status(400).json({ success: false, message: e.message, payload: {} })
//     })  
// };

//get all inventions
const getAllInventions = (req,res,next) =>{
  InventionModel.find()
  .then((Invention)=>{
    res.status(200).json({
      success: true,
      message: 'Read successfuly',
      Invention
    })
  }).catch((e)=>{
    res.status(400).json({success:false, message: e.message, payload: {}})
  })
} 

module.exports = {
    createInvention,
    // updateInvention
    getAllInventions
  }