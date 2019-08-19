/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/footer.scss';
import React from 'react';
import Link from 'next/link';
import DefaultFooter from '../../../../app-data/shared/components/Footer';

const Footer = () => (
  <div className="footer-container d-flex justify-content-center position-relative">
    <Link href="/eshop/cart">
      <a className="big-blue-anchor text-uppercase d-flex justify-content-center align-items-center">
        Přejít k platbě
        {' '}
        &gt;
      </a>
    </Link>
    <DefaultFooter />
  </div>
);

export default Footer;
