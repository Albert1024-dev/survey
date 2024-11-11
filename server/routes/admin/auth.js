const express = require('express');
const router = express.Router();

const authController = require('../../controllers/admin/authController');
const authenticateToken = require('../../middleware/authentication');

router.post('/login', authController.login);
router.post('/logout', authenticateToken, authController.logout);

module.exports = router;