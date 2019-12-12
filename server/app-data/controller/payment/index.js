/* eslint-disable camelcase */
const gopay = require('gopay-nodejs');
// const mongoose = require('mongoose');
const { gp: { ClientID, ClientSecret, SandBox } } = require('../../config');
const Order = require('../../db/models/Order');

const dev = process.env.NODE_ENV !== 'production';

class PaymentController {
  constructor() {
    // GoPay Init
    this.GoPay = new gopay.GoPay(ClientID, ClientSecret, SandBox);
    this.token = 'UNDEFINED';
    this.paymentData = {
      target: {
        type: 'ACCOUNT',
        goid: '8772247550', // '8897572915',
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
      const orderNum = lastOrder ? lastOrder.orderNum : null;
      // const time = new Date();
      const order_number = orderNum;
      // ? String(parseInt(lastOrderNum, 10) + 1) : `${time.getFullYear}001`;
      // console.log('DEV: ', dev);

      const items = req.body.products.map((item) => ({
        count: item.count,
        type: 'ITEM',
        name: item.title,
        product_url: `${!dev ? 'https://thecinemadeck.com' : 'http://localhost:3004'}/${req.body.lang}/eshop`,
        amount: (item.price * 100) * item.count,
        vat_rate: 21,
      }));
      const data = {
        ...this.paymentData,
        amount: req.body.totalPriceToPay * 100,
        callback: {
          return_url: `${!dev ? 'https://thecinemadeck.com' : 'http://localhost:3004'}/${req.body.lang}/eshop/order-success?orN=${orderNum}`,
          notification_url: `${!dev ? 'https://thecinemadeck.com' : 'http://localhost:3004'}/${req.body.lang}/get-payment-status`,
        },
        currency: req.body.currency,
        payer: {
          contact: {
            first_name: req.body.name.split(' ')[0],
            last_name: req.body.name.split(' ')[1],
            email: req.body.email,
            postal_code: req.body.address.psc,
            country_code: req.body.address.state,
          },
        },
        order_number,
        items,
      };

      this.setPaymentData(data);

      const paymentResult = await this.GoPay.createPayment(this.paymentData);

      res.json({
        token: this.token,
        paymentResult,
      });
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  async paymentStatus(id) {
    try {
      const status = await this.GoPay.getStatus(id);

      return status;
    } catch (err) {
      console.log(err);
      throw new Error(err);
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
