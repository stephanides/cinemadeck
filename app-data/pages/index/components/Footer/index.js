
import React from 'react';
import DefaultFooter from '../../../../shared/components/Footer';

import styles from './styles/footer.style';

const Footer = () => (
  <div>
    <div className="footer-main" id="footer-main">
      <DefaultFooter />
    </div>
    <style jsx global>{styles}</style>
  </div>
);

export default Footer;
