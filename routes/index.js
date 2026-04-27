const express = require('express');
const router = express.Router();

// Sample static product data (Week 2 will replace with DB)
const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=220&fit=crop', description: 'High quality wireless headphones with noise cancellation.', stock: 15 },
  { id: 2, name: 'Running Shoes', price: 59.99, category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=220&fit=crop', description: 'Lightweight running shoes for everyday use.', stock: 30 },
  { id: 3, name: 'Smart Watch', price: 149.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=220&fit=crop', description: 'Feature-packed smartwatch with health tracking.', stock: 10 },
  { id: 4, name: 'Backpack', price: 39.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=220&fit=crop', description: 'Durable backpack with multiple compartments.', stock: 25 },
  { id: 5, name: 'Sunglasses', price: 29.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=220&fit=crop', description: 'UV-protected stylish sunglasses.', stock: 50 },
  { id: 6, name: 'Laptop Stand', price: 49.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=220&fit=crop', description: 'Ergonomic aluminum laptop stand.', stock: 20 },
];

// Home Page
router.get('/', (req, res) => {
  const featured = products.slice(0, 4);
  res.render('home', { title: 'ShopEase - Home', featured });
});

// Product Listing Page
router.get('/products', (req, res) => {
  res.render('products', { title: 'All Products', products });
});

// Product Detail Page
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).send('<h1>Product Not Found</h1>');
  }
  res.render('product-detail', { title: product.name, product });
});

module.exports = router;