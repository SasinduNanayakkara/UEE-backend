const { addAdmin, getOneAdmin, updateAdmin } = require('../controllers/admin.controller');

const router = require('express').Router();

router.create("/", addAdmin);
router.get("/:id", getOneAdmin);
router.put("/:id", updateAdmin);

module.export = router;