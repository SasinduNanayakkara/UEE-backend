const express = require("express");
const router = express.Router();

const { registerOrg, addToOrg } = require("../controllers/organization.controller");

router.post("/", registerOrg);
router.put("/:id", addToOrg);
// router.get("/", getAllOrgs);
// router.get("/:id", getOrgById);
// router.put("/:id", updateOrg);
// router.delete("/:id", deleteOrg);

module.exports = router;
