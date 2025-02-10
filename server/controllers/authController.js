const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user);  // Token is now generated here
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token, // Send token along with user data
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);  // Token is now generated here
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      token, // Send token along with user data
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Get User Profile
const getUserProfile = async (req, res) => {
  const user = await user.findById(req.user.id).select('-password');
  res.json(user);
};

module.exports = { registerUser, loginUser, getUserProfile };
