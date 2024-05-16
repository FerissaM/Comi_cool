const Order = require('../../models/order');

module.exports = {
  getAllForUser,
  cart,
  addToCart,
  setItemQtyInCart,
  checkout
};

async function getAllForUser(req, res) {
  try {
    const orders = await Order.find({ user: req.user._id, isPaid: true }).sort('-updatedAt');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function cart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function addToCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    console.log('cart', cart)
    console.log(req.params.id)
    await cart.addItemToCart(req.params.id);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function setItemQtyInCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.params.id, req.body.newQty);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
