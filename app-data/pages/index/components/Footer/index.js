
import React from 'react';
import PropTypes from 'prop-types';
import DefaultFooter from '../../../../shared/components/Footer';

import styles from './styles/footer.style';

const Footer = ({ home, lang }) => (
  <>
    <div className="footer-main" id="footer-main">
      <DefaultFooter home={home} lang={lang} />
    </div>
    <style jsx global>{styles}</style>
  </>
);

Footer.defaultProps = {
  home: false,
};
Footer.propTypes = {
  home: PropTypes.bool,
  lang: PropTypes.string.isRequired,
};

export default Footer;
