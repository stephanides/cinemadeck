const mongoose = require('mongoose');

const Order = mongoose.Schema({
  address: Object,
  currency: String,
  dateCreated: {
    default: () => (new Date()),
    type: Date,
  },
  email: String,
  name: String,
  orderNum: String,
  orderUid: String,
  orderStatus: String,
  paymentMethod: Number,
  products: [Object],
  note: String,
  totalPriceToPay: Number,
  userNotified: Boolean,
});

module.exports = mongoose.model('Order', Order);
