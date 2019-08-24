/* eslint-disable react/no-danger */
import './scss/about.scss';
import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import CustomContainer from '../../../../app-data/shared/components/CustomContainer';
import localisation from '../../../../app-data/shared/localisation/About';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].aboutTitle });
const renderDangerHtmlText1 = (lang) => ({ __html: localisation[lang].aboutText1 });
const renderDangerHtmlText2 = (lang) => ({ __html: localisation[lang].aboutText2 });

const About = ({ lang }) => (

  <div className="about" id="about">
    <Container fluid>
      <CustomContainer>
        <Container>
          <h1 className="text-center" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
          <p className="text-center mt-text" dangerouslySetInnerHTML={renderDangerHtmlText1(lang)} />
          <p className="text-center mt-4" dangerouslySetInnerHTML={renderDangerHtmlText2(lang)} />
        </Container>
      </CustomContainer>
    </Container>
  </div>
);

About.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default About;
