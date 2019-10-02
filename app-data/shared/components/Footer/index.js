import React from 'react';

import styles from './styles/footer.style';
import CustomContainer from '../CustomContainer';

const Footer = () => (
  <div className="main-footer-container">
    <CustomContainer>
      <div className="list_holder d-flex  justify-content-end">
        <ul className="footer-list d-flex justify-content-end">
          <li>Copyright 2019 CinemaDeck s.r. o.</li>
          <li>Designed by Jakub Carda</li>
          <li>Assembled by Codebrothers s. r. o.</li>
        </ul>
        <ul className="footer-list d-flex">
          <li>Obchodní podmínky</li>
          <li>Osobní údaje</li>
          <li>Cookies</li>
        </ul>
      </div>
    </CustomContainer>
    <style jsx>{styles}</style>
  </div>
);

export default Footer;
