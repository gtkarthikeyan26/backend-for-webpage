const express = require('express');
const router = express.Router();
const { create } = require('../controller/students.controller');

router.post('/v2/student', create);

module.exports = router;