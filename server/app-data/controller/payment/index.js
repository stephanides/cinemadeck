/* eslint-disable camelcase */
const gopay = require('gopay-nodejs');
const mongoose = require('mongoose');
const { gp: { ClientID, ClientSecret, SandBox } } = require('../../config');
const Order = require('../../db/models/Order');

class PaymentController {
  constructor() {
    // GoPay Init
    this.GoPay = new gopay.GoPay(ClientID, ClientSecret, SandBox);
    this.token = 'UNDEFINED';
    this.paymentData = {
      target: {
        type: 'ACCOUNT',
        goid: '8897572915',
      },
      callback: {
        return_url: 'http://localhost:3004/cz/home',
        // notification_url: 'http://localhost:3004/cz/home',
      },
    };
  }

  setPaymentData(data) {
    this.paymentData = { ...data };
  }

  async payment(req, res) {
    try {
      await this.setToken();
      const orders = await Order.find().sort('orderNum');

      const lastOrder = orders && orders.length > 0 ? orders.pop() : null;
      const lastOrderNum = lastOrder ? lastOrder.orderNum : null;
      const time = new Date();
      const order_number = lastOrderNum ? String(parseInt(lastOrderNum, 10) + 1) : `${time.getFullYear}001`;

      const items = req.body.products.map((item) => ({
        count: item.count,
        type: 'ITEM',
        name: item.title,
        product_url: 'http://localhost:3004/cz/eshop',
        amount: (item.price * 100) * item.count,
        vat_rate: 21,
      }));
      const data = {
        ...this.paymentData,
        amount: req.body.totalPriceToPay * 100,
        currency: req.body.currency,
        order_number,
        items,
      };

      console.log(data);
      this.setPaymentData(data);

      // res.json({ success: true, data: this.paymentData });
      const paymentResult = await this.GoPay.createPayment(this.paymentData);
      console.log(paymentResult);

      res.json({
        token: this.token,
        paymentResult,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async setToken() {
    try {
      this.token = await this.GoPay.getToken();
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = PaymentController;
