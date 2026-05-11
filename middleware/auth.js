const jwt = require('jsonwebtoken');

// Protect routes — must be logged in
const protect = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.redirect('/login');
  }
};

// Admin only
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') return next();
  return res.status(403).render('403', { title: 'Access Denied' });
};

// Pass user to all views (even public pages)
const setUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      res.locals.user = req.user;
    } catch {
      res.locals.user = null;
    }
  } else {
    res.locals.user = null;
  }
  next();
};

module.exports = { protect, adminOnly, setUser };