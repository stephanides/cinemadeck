
import React from 'react';
import PropTypes from 'prop-types';
import DefaultFooter from '../../../../shared/components/Footer';

import styles from './styles/footer.style';

const Footer = ({ lang }) => (
  <div>
    <div className="footer-main" id="footer-main">
      <DefaultFooter lang={lang} />
    </div>
    <style jsx global>{styles}</style>
  </div>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Footer;
