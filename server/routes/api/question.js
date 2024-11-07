const express = require('express');
const router = express.Router();

const questionController = require('../../controllers/questionController');

const authenticateToken = require('../../middleware/authentication');

router.get('/', questionController.get);
router.post('/', authenticateToken, questionController.create);
router.post('/:id', authenticateToken, questionController.update);
// router.post('/:id/delete', questionController.delete);

module.exports = router;