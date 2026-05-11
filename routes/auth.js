const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

// GET Login page
router.get('/login', (req, res) => {
  if (req.cookies.token) return res.redirect('/');
  res.render('auth/login', { title: 'Login', error: null });
});

// POST Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.render('auth/login', { title: 'Login', error: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.render('auth/login', { title: 'Login', error: 'Something went wrong' });
  }
});

// GET Signup page
router.get('/signup', (req, res) => {
  if (req.cookies.token) return res.redirect('/');
  res.render('auth/signup', { title: 'Sign Up', error: null });
});

// POST Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.render('auth/signup', { title: 'Sign Up', error: 'Email already registered' });
    }
    await User.create({ name, email, password });
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.render('auth/signup', { title: 'Sign Up', error: 'Something went wrong' });
  }
});

// Logout
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

module.exports = router;