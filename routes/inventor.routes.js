const router = require('express').Router();

router.post("/", createInventor);
router.get("/", getAllInventors);
router.get("/:id", getInventorById);
router.put("/:id", updateInventor);
router.delete("/:id", deleteInventor);

module.export = router;