/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col, Row } from 'reactstrap';
import styles from './styles/footer.style';
import CustomContainer from '../CustomContainer';

import localisation from '../../localisation/Footer';


const Footer = ({ home, lang }) => (
  <div className={home ? 'main-footer-container home pt-3' : 'main-footer-container pt-3'}>
    <CustomContainer>
      <div className="company-info">
        <Row>
          <Col>
            <ul>
              <li>{localisation[lang].companyName}</li>
              <li>{localisation[lang].companyID}</li>
              <li>{localisation[lang].companyAddress}</li>
              <li>{localisation[lang].companyContact}</li>
              <li>{localisation[lang].companyCourt}</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="text-right">Tel: +420 602 968 942</li>
              <li className="text-right">
                <img className="mr-2" src="/static/images/author/mail.png" alt="email" />
                <a href="mailto:martin@thecinemadeck.com">martin@thecinemadeck.com</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="list_holder d-flex  justify-content-between">
        <ul className="footer-list d-flex justify-content-end">
          <li>Copyright 2019 CinemaDeck</li>
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
          {/* <li>Cookies</li> */}
        </ul>
      </div>
      <div className="logos mb-3">
        <img src="https://help.gopay.com/cs/img.php?hash=6efd47e6022b111fee1d9fb862a93c57d279a0a060adc354c4de49308a23f572.png" alt="" />
        <img src="https://dl.dropboxusercontent.com/s/ou5pwstrx7wx4fz/mc_securecode_156px_width.png?dl=0" alt="" />
        <img src="https://help.gopay.com/cs/img.php?hash=d444576a72374717c48bc311dde864a3ca0320893f55dbbb903043fe673b476c.png" alt="" />
        <img src="https://help.gopay.com/cs/img.php?hash=b0958207ef638395c5728c1c1ddd65837242d1d5fc3dfa8ceca8cef4fa8894c3.png" alt="" />
        <img src="https://help.gopay.com/cs/img.php?hash=9229adf70f3a25146c64f477392b8b17c5ec9333285b6e6229fdd89e5ad55047.png" alt="" />
        <img src="https://help.gopay.com/cs/img.php?hash=9faf331b11e48cb7e13a95ecd22ffa5fa1e42dfdfe6705f8e4e20b235a1e8ccd.png" alt="" />
        <img src="https://dl.dropboxusercontent.com/s/t2okr7x7r5bposx/ms_vrt_opt_pos_73_2x.png?dl=0" alt="" />
      </div>
    </CustomContainer>
    <style jsx>{styles}</style>
  </div>
);

Footer.defaultProps = {
  home: false,
};
Footer.propTypes = {
  home: PropTypes.bool,
  lang: PropTypes.string.isRequired,
};

export default Footer;
