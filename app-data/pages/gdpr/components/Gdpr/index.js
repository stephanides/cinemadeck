/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import Footer from '../../../../shared/components/Footer';

import styles from './styles/gdpr.style';
import localisation from '../../../../shared/localisation/Gdpr';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].text5 });

const Gdpr = ({ lang }) => (

  <div className="gdpr" id="gdpr">
    <Container fluid>
      <Container>
        <h1 className="text-center pb-4">{localisation[lang].header}</h1>
        <h6 className="">{localisation[lang].header1}</h6>
        <h6 className="">{localisation[lang].header2}</h6>
        <h6 className="">{localisation[lang].header3}</h6>
        <h6 className="">{localisation[lang].header4}</h6>
        <h6 className="pt-4">{localisation[lang].header5}</h6>
        <p dangerouslySetInnerHTML={renderDangerHtml(lang)} />
        <h6 className="pt-4">{localisation[lang].header7}</h6>
        <p>{localisation[lang].text7}</p>
        <h6 className="pt-4">{localisation[lang].header8}</h6>
        <p>{localisation[lang].text8}</p>
        <h6 className="pt-4">{localisation[lang].header9}</h6>
        <ul>
          <li>{localisation[lang].text9_1}</li>
          <li>{localisation[lang].text9_2}</li>
          <li>{localisation[lang].text9_3}</li>
          <li>{localisation[lang].text9_4}</li>
          <li>{localisation[lang].text9_5}</li>
          <li>{localisation[lang].text9_6}</li>
          <li>
            {localisation[lang].text9_7}
            <ul>
              <li>{localisation[lang].text9_7_1}</li>
              <li>{localisation[lang].text9_7_2}</li>
            </ul>
          </li>
          <li>{localisation[lang].text9_8}</li>
        </ul>
      </Container>
    </Container>
    <div className="position-relative footer">
      <Footer lang={lang} />
    </div>
    <style jsx>{styles}</style>
  </div>
);

Gdpr.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Gdpr;
