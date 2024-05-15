// models/order.js
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the lineItemSchema
const lineItemSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  // Define any other properties specific to line items
});

// Define the orderSchema
const orderSchema = new Schema({
  // An order belongs to a user
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // Makes sense to embed an order's line items
  lineItems: [lineItemSchema],
  // A user's unpaid order is their "cart"
  isPaid: { type: Boolean, default: false },
}, { timestamps: true });

// Define virtual properties for orderSchema
orderSchema.virtual('orderTotal').get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

// Export the compiled model
module.exports = mongoose.model('Order', orderSchema);