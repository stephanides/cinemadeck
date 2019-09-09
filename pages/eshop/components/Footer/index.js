/* eslint-disable jsx-a11y/anchor-is-valid */
// import './scss/footer.scss';
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import DefaultFooter from '../../../../app-data/shared/components/Footer';

import locale from '../../../../app-data/shared/localisation/eshop';

const Footer = ({ lang }) => (
  <div>
    <div className="footer-container d-flex justify-content-center position-relative">
      <Link href="/eshop/cart">
        <a className="big-blue-anchor text-uppercase d-flex justify-content-center align-items-center">
          {locale[lang].proceedToCheckout}
          {' '}
          &gt;
        </a>
      </Link>
      <DefaultFooter />
      <style jsx>
        {
          `
            .footer-container {
              background-color: #f8f8f8;
              min-height: 390px;
              padding-top: 105px;
            }
            .footer-container .big-blue-anchor {
              background-color: #37baf1;
              border-radius: .25rem;
              color: #fff;
              font-size: .85rem;
              height: 70px;
              letter-spacing: .15rem;
              width: 480px;
            }
            .footer-container .big-blue-anchor:hover {
              background-color: #0098d8;
              text-decoration: none;
            }
          `
        }
      </style>
    </div>
  </div>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Footer;
