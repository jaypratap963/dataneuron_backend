const express = require("express");
const controller = require('../controller')
const router = express.Router();

router.post('/add', controller.add)
router.put('/update/:id', controller.update)
router.get('/count', controller.count)
module.exports = router;
