const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Home Page
router.get('/', async (req, res) => {
  try {
    const featured = await Product.find().limit(4);
    res.render('home', { title: 'ShopEase - Home', featured });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Product Listing Page with Search
router.get('/products', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { name:     { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } },
        ]
      };
    }

    const products = await Product.find(query);
    res.render('products', { title: 'All Products', products, search: search || '' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Product Detail Page
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).render('404', { title: 'Not Found' });
    res.render('product-detail', { title: product.name, product });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;