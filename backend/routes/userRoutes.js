const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: true, message: 'Not authenticated' });
};

// Get user profile
router.get('/profile', isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;