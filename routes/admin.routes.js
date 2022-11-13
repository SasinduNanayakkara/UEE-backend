const express = require("express");
const router = express.Router();

const {
  addAdmin,
  getOneAdmin,
  approveOrg,
  approveInventor,
  approveInvestor,
} = require("../controllers/admin.controller");

router.post("/", addAdmin);
router.get("/:id", getOneAdmin);
router.put("/org", approveOrg);
router.put("/inventor", approveInventor);
router.put("/investor", approveInvestor);

module.exports = router;
