const router = require('express').Router();
const { addInvestor, getInvestors, getOneInvestor, updateInvestor, deleteInvestor } = require('../controllers/investor.controller');


router.post("/", addInvestor);
router.get("/", getInvestors);
router.get("/:id", getOneInvestor);
router.put("/:id", updateInvestor);
router.delete("/:id", deleteInvestor);

module.exports = router;