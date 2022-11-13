const express = require("express");
const router = express.Router();

const {
  registerOrg,
  addToOrg,
  requestToOrg,
  approvalToOrg,
  rejectedToOrg,
  getAllOrgs,
  getOrgById,
  getRequests,
  getAdded,
} = require("../controllers/organization.controller");

router.post("/", registerOrg);
router.put("/add/:id", addToOrg);
router.put("/request/:id", requestToOrg);
router.get("/request/:id", getRequests);
router.put("/approval/:id", approvalToOrg);
router.get("/approval/:id", getAdded);
router.put("/rejected/:id", rejectedToOrg);
router.get("/", getAllOrgs);
router.get("/:id", getOrgById);

// router.put("/:id", updateOrg);
// router.delete("/:id", deleteOrg);

module.exports = router;
