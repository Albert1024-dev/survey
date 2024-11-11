const express = require('express');
const router = express.Router();

const validateSurvey = require('../../middleware/validateSurvey');

const surveyController = require('../../controllers/api/surveyController');

router.post('/user', surveyController.create);
router.post('/', surveyController.update);
router.get('/', surveyController.get);
router.get('/:userId', surveyController.getByUser);
router.post('/delete/:id', surveyController.delete);

module.exports = router;