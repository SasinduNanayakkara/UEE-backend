const router = require('express').Router();

const {
    createInventor,
    getInventorDetails
    } = require("../controllers/inventor.controller");

router.post('/createInventor', createInventor);
router.get("/getInventorDetails", getInventorDetails);
// router.get("/:id", getInventorById);
// router.put("/:id", updateInventor);
// router.delete("/:id", deleteInventor);

module.exports = router;