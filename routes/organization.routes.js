const express = require("express");
const router = express.Router();

const { registerOrg } = require("../controllers/organization.controller");

router.post("/", registerOrg);
// router.get("/", getAllOrgs);
// router.get("/:id", getOrgById);
// router.put("/:id", updateOrg);
// router.delete("/:id", deleteOrg);

module.exports = router;
