/* eslint-disable class-methods-use-this */
const nodemailer = require('nodemailer');
const localisation = require('../../../../app-data/shared/localisation/eshop/order-success');

class MailController {
  constructor() {
    this.transporter = nodemailer.createTransport({
      auth: {
        pass: 'windowsXP8975',
        user: 'info@codebrothers.sk', // 'martin@thecinemadeck.com',
      },
      host: 'smtp.zoho.eu', // 'email09.active24.com',
      port: 465,
      secure: true, // ssl
      ignoreTLS: true,
    });
  }

  async sendOrderNotification(req, res, next) {
    try {
      /* await this.transporter.sendMail({
        from: 'info@codebrothers.sk',
        subject: `CinemaDeck | Objednávka: ${req.body.orderNum}`,
        html: `
        <h2>${localisation[req.body.lang].welcomeToFamily}</h2>

        `,
        to: 'info@codebrothers.sk', // TODO change for Tonap e-mail address in production
      }); */

      res.json({ message: 'Mail has been successfully sent', success: true });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = MailController;
