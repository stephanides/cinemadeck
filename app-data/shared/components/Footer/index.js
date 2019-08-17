import './scss/footer.scss';
import React from 'react';
import CustomContainer from '../CustomContainer';

const Footer = () => (
  <div className="main-footer-container">
    <CustomContainer>
      <ul className="footer-list d-flex justify-content-end">
        <li>Copyright 2019 CinemaDeck s.r. o.</li>
        <li>Designed by Jakub Carda</li>
        <li>Assembled by Codebrothers s. r. o.</li>
        <li>Obchodní podmínky</li>
        <li>Osobní údaje</li>
        <li>Cookies</li>
      </ul>
    </CustomContainer>
  </div>
);

export default Footer;
