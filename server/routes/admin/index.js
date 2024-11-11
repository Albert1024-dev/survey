const express = require('express');
const router = express.Router();

const auth = require('./auth');
const resource = require('./resource');
const question = require('./question');

router.use('/auth', auth);
router.use('/resource', resource);
router.use('/question', question);

module.exports = router;