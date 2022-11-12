var express = require("express");
const organizationModel = require("../models/organization.model");
const orgModel = require("../models/organization.model");

const registerOrg = (req, res, next) => {
  const org = new orgModel({
    username: req.body.username,
    orgName: req.body.orgName,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    mobile: req.body.mobile,
    app_nic: req.body.app_nic,
    app_name: req.body.app_name,
    app_nic_img: req.body.app_nic_img,
    app_position: req.body.app_position,
    description: req.body.description,
    website: req.body.website,
    approval: "pending",
    added: [],
    requested: [],
  });
  org
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
const deleteOrg = (req, res, next) => {};

const addToOrg =  (req,res) => {
  try {
    const orgId = req.params.id;
    const inventionId = req.body.inventionId;
    console.log(inventionId);
    const updatedOrg = organizationModel.update({_id: orgId}, {
      $push: {requested: inventionId},
    });
    if (updatedOrg) {
      res.status(200).json(updatedOrg);
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  registerOrg,
  deleteOrg,
  addToOrg,
};
