import React from 'react';
import PropTypes from 'prop-types';

import locale from '../../localisation/eshop/cart';
import styles from './styles/GoPayModal.style';

const GoPayRedirectModal = ({ lang, show }) => (
  <>
    <div className={show ? 'gp show' : 'gp hide'}>
      <div className="gp-bg" />
      <div className="gp-wrapper">
        <div className="gp-content">
          <img src="/static/images/go-pay-logo.png" alt="" />
          <p>{locale[lang].GPRedirect}</p>
        </div>
      </div>
    </div>
    <style jsx>{styles}</style>
  </>
);

GoPayRedirectModal.propTypes = {
  lang: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default GoPayRedirectModal;
