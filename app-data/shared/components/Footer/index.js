/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles/footer.style';
import CustomContainer from '../CustomContainer';

import localisation from '../../localisation/Footer';


const Footer = ({ lang }) => (
  <div className="main-footer-container">
    <CustomContainer>
      <div className="list_holder d-flex  justify-content-between">
        <ul className="footer-list d-flex justify-content-end">
          <li>Copyright 2019 CinemaDeck s. r. o.</li>
          <li>Designed by Jakub Carda</li>
          <li>Assembled by Codebrothers s. r. o.</li>
        </ul>
        <ul className="footer-list d-flex">
          <li>
            <Link href="/obchodni-podminky">
              <a>{localisation[lang].terms}</a>
            </Link>
          </li>
          <li>
            <Link href="/ochrana-osobnych-udaju">
              <a>{localisation[lang].privacy}</a>
            </Link>
          </li>
          <li>Cookies</li>
        </ul>
      </div>
    </CustomContainer>
    <style jsx>{styles}</style>
  </div>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Footer;
