import './scss/footer.scss';
import React from 'react';
import DefaultFooter from '../../../../app-data/shared/components/Footer';

const Footer = () => (
  <div className="footer-container d-flex justify-content-center position-relative">
    <button
      type="button"
      className="big-blue-button text-uppercase"
    >
      Přejít k platbě
      <span className="ml-3">&gt;</span>
    </button>
    <DefaultFooter />
  </div>
);

export default Footer;
