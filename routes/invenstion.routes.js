const router = require('express').Router();

router.post("/", createInvention);
router.get("/", getAllInventions);
router.get("/:id", getInventionById);
router.put("/:id", updateInvention);
router.delete("/:id", deleteInvention);

module.export = router;