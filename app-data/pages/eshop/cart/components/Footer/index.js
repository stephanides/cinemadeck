import React from 'react';
import PropTypes from 'prop-types';
import DefaultFooter from '../../../../../shared/components/Footer';

const Footer = ({ lang }) => (
  <div className="cart-footer-container position-relative mt-5">
    <DefaultFooter lang={lang} />
    <style jsx>
      {
        `
        .cart-footer-container { height: 70px; }
        `
      }
    </style>
  </div>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};


export default Footer;
