const router = require('express').Router();

const {
    createInvention
} = require("../controllers/invention.controller")

router.post("/createInvention", createInvention);


module.export = router;