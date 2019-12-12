const express = require('express');
const PaymentController = require('../../controller/payment');

const Router = express.Router();
const order = new PaymentController();

Router.post('/payment', (req, res) => {
  order.payment(req, res);
});

module.exports = Router;
