/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/footer.scss';
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import DefaultFooter from '../../Footer';

import locale from '../../../localisation/eshop';

const Footer = ({ lang }) => (
  <div className="footer-container d-flex justify-content-center position-relative">
    <Link href="/eshop/cart">
      <a className="big-blue-anchor text-uppercase d-flex justify-content-center align-items-center">
        {locale[lang].proceedToCheckout}
        {' '}
        &gt;
      </a>
    </Link>
    <DefaultFooter />
  </div>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Footer;
