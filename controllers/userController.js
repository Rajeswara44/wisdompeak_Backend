const User = require('../models/User');

// User registration
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// User login
exports.login = async (req, res) => {
  // Logic for user login will be implemented here
};

// Additional user-related functions can be added here
