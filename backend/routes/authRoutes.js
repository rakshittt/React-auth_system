const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Logout route
router.post('/logout', authController.logout);

// Get current user route
router.get('/me', authController.getCurrentUser);

module.exports = router;
