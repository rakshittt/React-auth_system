const passport = require('passport');
const User = require('../models/User');

// Register a new user
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: true, 
        message: 'All fields are required' 
      });
    }

    // Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ 
        error: true, 
        message: 'Email already in use' 
      });
    }
    
    // Create new user
    const user = await User.create({ name, email, password });
    
    // Log in the user after registration
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(201).json({ 
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      error: true, 
      message: 'An error occurred during registration' 
    });
  }
};

// Login user
exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    
    if (!user) {
      return res.status(401).json({ error: true, message: info.message });
    }
    
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      
      return res.status(200).json({ user });
    });
  })(req, res, next);
};

// Logout user
exports.logout = (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.status(200).json({ message: 'Logged out successfully' });
  });
};

// Get current user
exports.getCurrentUser = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: true, message: 'Not authenticated' });
  }
  
  res.status(200).json({ user: req.user });
};

