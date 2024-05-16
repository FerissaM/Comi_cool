const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// get to retrieve the current cart
router.get('/cart', ordersCtrl.cart);
// post to add an item to the cart
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.get('/', ordersCtrl.getAllOrders);
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;