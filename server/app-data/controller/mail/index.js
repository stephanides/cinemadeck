/* eslint-disable class-methods-use-this */
const nodemailer = require('nodemailer');
const pdf = require('pdf-creator-node');
const path = require('path');
const fs = require('fs');

const Order = require('../../db/models/Order');
const localisation = require('../../../../app-data/shared/localisation/eshop/order-success');

class MailController {
  constructor() {
    this.pdfHtml = fs.readFileSync(path.join(__dirname, '../../../../static/html/pdfInvoiceTemplate/template.html'), 'utf8');
    this.pdfOptions = {
      format: 'A4',
      orientation: 'portrait',
      border: '10mm',
    };
    this.pdfDocument = {};
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
      this.pdfDocument = {
        html: this.pdfHtml,
        data: {
          orderNum: req.body.orderNum,
        },
        path: path.join(__dirname, `../../../../static/download/invoices/invoice-${req.body.orderNum}.pdf`),
      };
      const pdfOutput = await pdf.create(this.pdfDocument, this.pdfOptions);

      console.log(pdfOutput);

      await this.transporter.sendMail({
        from: 'info@codebrothers.sk',
        subject: `CinemaDeck | Objednávka: ${req.body.orderNum}`,
        html: `
        <h2>${localisation[req.body.lang].welcomeToFamily}</h2>

        `,
        to: 'viktor.vojtek@codebrothers.sk', // TODO change for Tonap e-mail address in production
      });

      await Order.findOneAndUpdate(
        { orderNum: req.body.orderNum },
        { $set: { userNotified: true } },
        { uppsert: true, new: true },
      );

      res.json({ message: 'Mail has been successfully sent', success: true });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = MailController;
