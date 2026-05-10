require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Wireless Headphones', price: 99.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=220&fit=crop', description: 'High quality wireless headphones with noise cancellation.', stock: 15 },
  { name: 'Running Shoes',       price: 59.99, category: 'Footwear',    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=220&fit=crop', description: 'Lightweight running shoes for everyday use.', stock: 30 },
  { name: 'Smart Watch',         price: 149.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=220&fit=crop', description: 'Feature-packed smartwatch with health tracking.', stock: 10 },
  { name: 'Backpack',            price: 39.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=220&fit=crop', description: 'Durable backpack with multiple compartments.', stock: 25 },
  { name: 'Sunglasses',          price: 29.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=220&fit=crop', description: 'UV-protected stylish sunglasses.', stock: 50 },
  { name: 'Laptop Stand',        price: 49.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=220&fit=crop', description: 'Ergonomic aluminum laptop stand.', stock: 20 },
  { name: 'Mechanical Keyboard', price: 89.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=220&fit=crop', description: 'Tactile mechanical keyboard for developers.', stock: 12 },
  { name: 'Yoga Mat',            price: 24.99, category: 'Sports',      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=220&fit=crop', description: 'Non-slip yoga mat for home workouts.', stock: 40 },
  { name: 'Coffee Mug',          price: 14.99, category: 'Kitchen',     image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=220&fit=crop', description: 'Large ceramic coffee mug, 16oz.', stock: 60 },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');
    await Product.insertMany(products);
    console.log('✅ Sample products inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
}

seed();