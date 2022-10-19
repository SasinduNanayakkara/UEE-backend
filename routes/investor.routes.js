const router = require('express').Router();

router.post("/", createInvestor);
router.get("/", getAllInvestors);
router.get("/:id", getInvestorById);
router.put("/:id", updateInvestor);
router.delete("/:id", deleteInvestor);

module.export = router;