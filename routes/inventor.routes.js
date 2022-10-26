const router = require('express').Router();

const {
    createInventor
    } = require("../controllers/inventor.controller");

router.post('/createInventor', createInventor);
// router.get("/", getAllInventors);
// router.get("/:id", getInventorById);
// router.put("/:id", updateInventor);
// router.delete("/:id", deleteInventor);

module.exports = router;