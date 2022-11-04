const express = require("express");
const router = express.Router();

const {
  createInvention,
  updateInvention,
  getAllInventionsByID,
  deleteInvention,
  getAllInventions,
  getAllInvestment
} = require("../controllers/invention.controller");

router.post("/createInvention", createInvention);
router.put('/updateInvention', updateInvention);
router.get("/getAllInventionsByID", getAllInventionsByID);
router.delete("/deleteInvention", deleteInvention);
router.get("/getAllInventions",getAllInventions);
router.get("/getAllInvestment",getAllInvestment);

module.exports = router;
