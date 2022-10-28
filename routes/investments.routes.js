const { addInvestment, getInvestmentsByInvestor, getInvestmentsByInvention, updateInvestment, deleteInvestment } = require("../controllers/investment.controller");

const router = require("express").Router();

router.post("/", addInvestment);
router.get("/investor/:id", getInvestmentsByInvestor);
router.get("/invention/:id", getInvestmentsByInvention);
router.put("/:id", updateInvestment);
router.delete("/id", deleteInvestment);

module.exports = router;