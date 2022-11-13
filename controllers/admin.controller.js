const adminModel = require("../models/admin.model");
const organizationModel = require("../models/organization.model");
const investorModel = require("../models/investor.model");
const inventorModel = require("../models/inventor");

const addAdmin = async (req, res) => {
  try {
    const { name, email, password, username } = req.body;
    const admin = new adminModel({
      name,
      email,
      password,
      username,
    });

    const result = await admin.save();
    if (result) {
      res.status(200).json({ result });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getOneAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await adminModel.findOne({ _id: id });
    if (admin) {
      res.status(200).json({ admin });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const approveOrg = async (req, res) => {
  try {
    const orgId = req.body.id;
    const org = await organizationModel.findOneAndUpdate(
      { _id: orgId },
      { $set: { approval: "approved" } }
    );
    if (org) {
      res.status(200).json({ org });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const approveInvestor = async (req, res) => {
  try {
    const investorId = req.body.id;
    const investor = awaiinventors.findOneAndUpdate(
      { _id: investorId },
      { $set: { approval: "approved" } }
    );
    if (investor) {
      res.status(200).json({ org });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const approveInventor = async (req, res) => {
  try {
    const inventorId = req.body.id;
    const inventor = await inventorModel.findOneAndUpdate(
      { _id: inventorId },
      { $set: { approval: "approved" } }
    );
    if (inventor) {
      res.status(200).json({ inventor });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  addAdmin,
  getOneAdmin,
  approveOrg,
  approveInventor,
  approveInvestor,
};
