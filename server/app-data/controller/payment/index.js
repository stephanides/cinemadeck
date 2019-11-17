const gopay = require('gopay-nodejs');
const { gp: { ClientID, ClientSecret, SandBox } } = require('../../config');

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
      amount: 100,
      currency: 'CZK',
      order_number: '001',
      items: [{
        type: 'ITEM',
        name: 'obuv',
        product_url: 'http://localhost:3004/cz/eshop',
        ean: '1234567890123',
        amount: 100,
        count: 1,
        vat_rate: 21,
      }],
      callback: {
        return_url: 'http://localhost:3004/cz/home',
        notification_url: 'http://localhost:3004/cz/home',
      },
    };
  }

  async payment(req, res) {
    this.setToken();

    try {
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
