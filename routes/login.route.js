const { login } = require("../controllers/login.controller");

const router = require("express").Router();

router.post("/", login);

module.exports = router;