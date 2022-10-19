const router = require('express').Router();

router.post("/", createOrg);
router.get("/", getAllOrgs);
router.get("/:id", getOrgById);
router.put("/:id", updateOrg);
router.delete("/:id", deleteOrg);

module.export = router;