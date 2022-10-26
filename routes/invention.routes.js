const express = require("express");
const router = express.Router();

const {
    createInvention, updateInvention, getAllInventions
    } = require("../controllers/invention.controller");

router.post('/createInvention', createInvention);
// router.put('/updateInvention', updateInvention);
router.get('/getAllInventions', getAllInventions);

module.exports = router;