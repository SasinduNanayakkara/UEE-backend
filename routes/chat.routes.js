const { addMessage, getMessages } = require('../controllers/chat.controller');

const router = require('express').Router();

router.post("/addmsg", addMessage);
router.post("/getmsg", getMessages);

module.exports = router;