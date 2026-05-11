require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function createAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);
  const existing = await User.findOne({ email: 'admin@shopease.com' });
  if (existing) {
    console.log('⚠️  Admin already exists');
    process.exit(0);
  }
  await User.create({
    name: 'Admin',
    email: 'admin@shopease.com',
    password: 'admin123',
    role: 'admin',
  });
  console.log('✅ Admin created: admin@shopease.com / admin123');
  process.exit(0);
}

createAdmin().catch(console.error);