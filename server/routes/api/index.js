const express = require('express');
const router = express.Router();


const auth = require('./auth');
const survey = require('./survey');
const message = require('./message');
const question = require('./question');

router.use('/auth', auth);
router.use('/survey', survey);
router.use('/message', message);
router.use('/question', question);

module.exports = router;