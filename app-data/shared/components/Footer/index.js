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
            <Link href={`/${lang}/obchodni-podminky`} as={lang === 'cz' ? `/${lang}/obchodni-podminky` : `/${lang}/terms-conditions`}>
              <a>{localisation[lang].terms}</a>
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/ochrana-osobnych-udaju`} as={lang === 'cz' ? `/${lang}/ochrana-osobnych-udaju` : `/${lang}/gdpr`}>
              <a>{localisation[lang].privacy}</a>
            </Link>
          </li>
          <li>Cookies</li>
        </ul>
      </div>
      <p className="text-right">Tel: +420 602 968 942</p>
    </CustomContainer>
    <style jsx>{styles}</style>
  </div>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Footer;
