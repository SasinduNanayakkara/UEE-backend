const express = require("express");
const router = express.Router();

const {
  registerOrg,
  addToOrg,
  requestToOrg,
} = require("../controllers/organization.controller");

router.post("/", registerOrg);
router.put("/add/:id", addToOrg);
router.put("/request/:id", requestToOrg);
// router.get("/", getAllOrgs);
// router.get("/:id", getOrgById);
// router.put("/:id", updateOrg);
// router.delete("/:id", deleteOrg);

module.exports = router;
