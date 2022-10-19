const router = require('express').Router();

router.post("/", createInvestment);
router.get("/", getAllInvestments);
router.get("/:id", getInvestmentById);
router.put("/:id", updateInvestment);
router.delete("/:id", deleteInvestment);

module.export = router;