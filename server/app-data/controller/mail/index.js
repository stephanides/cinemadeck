/* eslint-disable class-methods-use-this */
const nodemailer = require('nodemailer');
const pdf = require('pdf-creator-node');
const path = require('path');
const fs = require('fs');

const Order = require('../../db/models/Order');
const localisation = require('../../../../app-data/shared/localisation/eshop/order-success');

class MailController {
  constructor() {
    this.pdfHtml = '';
    this.pdfOptions = {
      format: 'A4',
      orientation: 'portrait',
      border: '10mm',
    };
    this.pdfDocument = {};
    this.transporter = nodemailer.createTransport({
      auth: {
        pass: 'Presov51Presov51', // 'windowsXP8975', // 'Presov51230890Mh',
        user: 'martin@thecinemadeck.com', // 'info@codebrothers.sk', // 'martin@thecinemadeck.com'
      },
      host: 'email.active24.com', // 'email09.active24.com', // 'smtp.zoho.eu', // 'email09.active24.com'
      port: 465, // 587,
      secure: true, // true, // ssl
      ignoreTLS: true,
    });
  }

  async sendOrderNotification(req, res, next) {
    // console.log('Mail controller send notif.');
    try {
      const dateObj = new Date();
      const day = dateObj.getDate();
      const month = dateObj.getMonth() + 1;
      const year = dateObj.getFullYear();
      const {
        address: {
          city, psc, street, state,
        }, email, name, lang, orderUid, paymentMethod,
        products, totalPrice, totalPriceVat, VAT,
      } = req.body;

      let paymentMethodFinal = '';

      if (lang === 'cz') {
        if (paymentMethod === 'PAYMENT_CARD') {
          paymentMethodFinal = 'Platba kartou';
        } else {
          paymentMethodFinal = 'Bankovní převod';
        }
      } else if (paymentMethod === 'PAYMENT_CARD') {
        paymentMethodFinal = 'Payed by card';
      } else {
        paymentMethodFinal = 'Bank transfer';
      }

      /* const newProducts = [];

      for (let i = 0; i < products.length; i += 1) {
        const priceVat = products[i].price * 0.21;
        const modProd = { ...products[i], priceVat };

        newProducts.push(modProd);
      } */

      this.pdfHtml = fs.readFileSync(path.join(__dirname, `../../../../static/html/pdfInvoiceTemplate/${lang}/template.html`), 'utf8');

      this.pdfDocument = {
        html: this.pdfHtml,
        data: {
          state,
          street,
          psc,
          city,
          email,
          name,
          currency: lang === 'cz' ? 'CZK' : '€',
          date: `${day}.${month}.${year}`,
          orderNum: req.body.orderNum,
          paymentMethod: paymentMethodFinal,
          signatureImg: `file://${path.join(__dirname, '../../../../static/images/signature.png')}`,
          logo: `file://${path.join(__dirname, '../../../../static/images/logo-dark.png')}`,
          products,
          totalPrice,
          totalPriceVat,
          VAT,
        },
        path: path.join(__dirname, `../../../../static/download/invoices/${lang}/invoice-${req.body.orderNum}.pdf`),
      };

      // console.log('Going to create PDF');

      await pdf.create(this.pdfDocument, this.pdfOptions);

      // console.log(pdfCreated);

      await this.transporter.sendMail({
        from: 'martin@thecinemadeck.com', // 'info@codebrothers.sk', // 'martin@thecinemadeck.com',
        subject: `${localisation[req.body.lang].mailSubject}`,
        html: `
        <div style="width: 50%; display: block; margin: 0 auto;">
          <img style="width: 100%" src="https://thecinemadeck.com/static/images/logomail.png" alt="logo" />
          <p style="text-align:center;">${localisation[req.body.lang].emailText1}</p>
          <p style="text-align:center;">${localisation[req.body.lang].emailText2}</p>
          <p style="text-align:center;font-weight:bold">${localisation[req.body.lang].emailText3}</p>
          <p style="text-align:center;">${localisation[req.body.lang].emailText4}</p>
          <p style="text-align:center;">${localisation[req.body.lang].emailText5}</p>
          <p style="text-align:center;">${localisation[req.body.lang].emailText6}<a href="mailto:martin@thecinemadeck.com" style="color:#0098d8;cursor:pointer;"> martin@thecinemadeck.com</a></p>
          <p style="text-align:center;">${localisation[req.body.lang].emailText7}</p>
          <p style="text-align:center;font-weight:bold">${localisation[req.body.lang].emailText8}</p>
          <p style="text-align:center;font-weight:bold">${localisation[req.body.lang].emailText9}</p>
          <p style="text-align:center;">${localisation[req.body.lang].emailText10}</p>
          <p style="text-align:center;">Martin</p>
        </div>
        <a href="https://thecinemadeck.com/${lang}/eshop/download/${orderUid}" style="background-color: #0098d8;color: white;width: 300px;padding-top: 24px;padding-bottom: 24px;letter-spacing: 4px;border-radius: 4px;box-shadow: 0px 0px 7px 0px #3ac5ff;text-decoration: none;text-transform: uppercase;display: block;margin: 0 auto;margin-bottom:4rem;text-align:center">
        ${localisation[req.body.lang].downloadBtn}</a>
        `,
        to: `${email}`, // 'viktor.vojtek@codebrothers.sk', // `${email}`,
        attachments: [{
          filename: `Invoice-${req.body.orderNum}.pdf`,
          path: path.join(__dirname, `../../../../static/download/invoices/${lang}/invoice-${req.body.orderNum}.pdf`),
          contentType: 'application/pdf',
        }],
      });

      await this.transporter.sendMail({
        from: 'martin@thecinemadeck.com', // 'info@codebrothers.sk', // 'martin@thecinemadeck.com',
        subject: `CinemaDeck | Nová objednávka: ${req.body.orderNum}`,
        text: `Faktúra číslo: ${req.body.orderNum}`,
        to: 'faktury@thecinemadeck.com', // 'viktor.vojtek@codebrothers.sk', // 'faktury@thecinemadeck.com',
        cc: 'martin@thecinemadeck.com', // 'viktor.vojtek@codebrothers.sk', // 'martin@thecinemadeck.com',
        attachments: [{
          filename: `Invoice-${req.body.orderNum}.pdf`,
          path: path.join(__dirname, `../../../../static/download/invoices/${lang}/invoice-${req.body.orderNum}.pdf`),
          contentType: 'application/pdf',
        }],
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
