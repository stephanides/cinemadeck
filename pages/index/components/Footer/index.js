
import React from 'react';
import DefaultFooter from '../../../../app-data/shared/components/Footer';

import styles from './styles/footer.style';

const Footer = () => (
  <div className="footer-main" id="footer-main">
    <DefaultFooter />
    <style jsx>{styles}</style>
  </div>
);

export default Footer;
