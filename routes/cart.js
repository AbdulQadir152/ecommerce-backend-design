const express  = require('express');
const router   = express.Router();
const Product  = require('../models/Product');
const Cart     = require('../models/Cart');
const { protect } = require('../middleware/auth');

// All cart routes require login
router.use(protect);

// Block admins from all cart routes
router.use((req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    // For API (AJAX) requests return JSON; for page requests redirect
    if (req.headers['content-type'] === 'application/json' || req.xhr) {
      return res.status(403).json({ success: false, message: 'Admins cannot use the cart.' });
    }
    return res.status(403).render('403', { title: 'Access Denied' });
  }
  next();
});

// GET /cart  — view cart
router.get('/cart', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
      .populate('items.product');

    const items = cart ? cart.items.filter(i => i.product) : [];
    const grandTotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
    const totalItems = items.reduce((s, i) => s + i.quantity, 0);

    res.render('cart', { title: 'My Cart', items, grandTotal, totalItems });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST /cart/add/:id  — add 1 unit; decrease stock by 1
router.post('/cart/add/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    if (product.stock < 1) return res.status(400).json({ success: false, message: 'Out of stock' });

    // Decrease stock
    product.stock -= 1;
    await product.save();

    // Upsert cart
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [] });
    }

    const existingItem = cart.items.find(i => i.product.toString() === req.params.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ product: req.params.id, quantity: 1 });
    }
    await cart.save();

    const totalItems = cart.items.reduce((s, i) => s + i.quantity, 0);
    res.json({ success: true, stock: product.stock, totalItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// POST /cart/remove/:id  — remove 1 unit; increase stock by 1
router.post('/cart/remove/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(400).json({ success: false, message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(i => i.product.toString() === req.params.id);
    if (itemIndex === -1) return res.status(400).json({ success: false, message: 'Item not in cart' });

    // Increase stock back
    product.stock += 1;
    await product.save();

    if (cart.items[itemIndex].quantity > 1) {
      cart.items[itemIndex].quantity -= 1;
    } else {
      cart.items.splice(itemIndex, 1);
    }
    await cart.save();

    const totalItems = cart.items.reduce((s, i) => s + i.quantity, 0);
    res.json({ success: true, stock: product.stock, totalItems, removed: cart.items[itemIndex] === undefined });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// POST /cart/delete/:id  — remove item entirely; restore full quantity
router.post('/cart/delete/:id', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.redirect('/cart');

    const item = cart.items.find(i => i.product.toString() === req.params.id);
    if (item) {
      await Product.findByIdAndUpdate(req.params.id, { $inc: { stock: item.quantity } });
      cart.items = cart.items.filter(i => i.product.toString() !== req.params.id);
      await cart.save();
    }
    res.redirect('/cart');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

// GET /cart/count  — lightweight count for badge
router.get('/cart/count', async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    const totalItems = cart ? cart.items.reduce((s, i) => s + i.quantity, 0) : 0;
    res.json({ totalItems });
  } catch {
    res.json({ totalItems: 0 });
  }
});
