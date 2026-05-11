const express = require('express');
const router = express.Router();
const Product = require(`${__dirname}/../models/Product.js`);
const { protect, adminOnly } = require('../middleware/auth');

// Add Product page (admin only)
router.get('/admin/add-product', protect, adminOnly, (req, res) => {
  res.render('admin/add-product', { title: 'Add Product', error: null, success: null });
});

// POST Add Product
router.post('/admin/add-product', protect, adminOnly, async (req, res) => {
  const { name, price, category, image, description, stock } = req.body;
  try {
    await Product.create({ name, price: parseFloat(price), category, image, description, stock: parseInt(stock) });
    res.render('admin/add-product', { title: 'Add Product', error: null, success: 'Product added successfully!' });
  } catch (err) {
    console.error(err);
    res.render('admin/add-product', { title: 'Add Product', error: 'Failed to add product', success: null });
  }
});

module.exports = router;