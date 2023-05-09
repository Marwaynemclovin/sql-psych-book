const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ message: 'Authentication failed' });
    } else {
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        res.status(401).json({ message: 'Authentication failed' });
      } else {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

// Signup
const signup = async (req, res) => {
  console.log("I am in sign up function in userControlle.js line 29")
  try {
    const user = await User.create(req.body);
    console.log('authController.js line 31 USER: ',user); 
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  login,
  signup
};
