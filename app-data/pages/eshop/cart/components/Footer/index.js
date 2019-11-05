import React from 'react';
import PropTypes from 'prop-types';
import DefaultFooter from '../../../../../shared/components/Footer';

const Footer = ({ lang }) => (
  <div className="cart-footer-container position-relative mt-5">
    <DefaultFooter lang={lang} />
  </div>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};


export default Footer;
