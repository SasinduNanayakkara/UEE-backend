var express = require("express");
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

module.exports = {
  registerOrg,
  deleteOrg,
};
