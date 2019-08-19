import React from 'react';
import DefaultFooter from '../../../../../app-data/shared/components/Footer';

const Footer = () => (
  <div className="cart-footer-container position-relative mt-5">
    <DefaultFooter />
    <style jsx>
      {
        `
        .cart-footer-container {
          height: 70px;
        }
        `
      }
    </style>
  </div>
);

export default Footer;
