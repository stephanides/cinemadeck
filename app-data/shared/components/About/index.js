import React from 'react';
import { Container } from 'reactstrap';
import './scss/about.scss';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import CustomContainer from '../CustomContainer';
import localisation from '../../localisation/Navigation';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].aboutTitle })
const renderDangerHtmlText1 = (lang) => ({ __html: localisation[lang].aboutText1 })
const renderDangerHtmlText2 = (lang) => ({ __html: localisation[lang].aboutText2 })
const About = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({ getLocale: { lang }}) => {

  return (
  <div className="about" id="about">
    <Container fluid>
      <CustomContainer>
        <Container>
          <h1 className="text-center" dangerouslySetInnerHTML={renderDangerHtml(lang)}/>
          <img src="/static/images/aboutKarty/spoluKarty.png" alt="Karty CinemaDeck" />
          <p className="text-center mt-text" dangerouslySetInnerHTML={renderDangerHtmlText1(lang)}/>
          <p className="text-center mt-4" dangerouslySetInnerHTML={renderDangerHtmlText2(lang)}/>
        </Container>
      </CustomContainer>
    </Container>
  </div>
  );
});

export default About;