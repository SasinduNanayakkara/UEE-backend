const express = require("express");
const router = express.Router();

// const {
//     addInvention
// } = require("../controllers/invention.controller");

const {
    createInvention
    } = require("../controllers/invention.controller");

router.post('/createInvention', createInvention);

module.exports = router;