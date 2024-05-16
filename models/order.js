const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = require('./bookSchema');

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: bookSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  console.log(this.item.price)
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('orderQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addItemToCart = async function(itemId) {
  console.log('bookId', itemId)
  const cart = this;
  console.log(cart)
  console.log('wtf')
  const lineItem = cart.lineItems.find(line => line.item._id.equals(itemId));
  // const lineItem = itemId
  console.log('lineItem', lineItem)
  if (lineItem) {
    console.log('bye')
    lineItem.qty += 1;
  } else {
    console.log('hi')
    const Book = mongoose.model('Book');
    const book = await Book.findById(itemId);
    console.log(book)
    cart.lineItems.push({ item: book });
    console.log(cart)
  }
  return cart.save();
};

orderSchema.methods.setItemQty = function(itemId, newQty) {
  const cart = this;
  const l = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (l && newQty <= 0) {
    console.log('hi')
    console.log(l)
    try {
      // l.deleteOne();
      cart.lineItems.remove(l)
    } catch (err) {
      console.log(err)
    }
  } else if (l) {
    l.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);
