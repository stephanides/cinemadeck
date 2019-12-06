const express = require('express');
const MailController = require('../../controller/mail');

const Router = express.Router();
const order = new MailController();

Router.post('/send-order-notification', async (req, res, next) => {
  console.log('Notification route');
  order.sendOrderNotification(req, res, next);
});

module.exports = Router;
