import React from 'react';
import { Container } from 'reactstrap';
import './scss/about.scss';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import CustomContainer from '../CustomContainer';
import localisation from '../../localisation/Navigation';

const About = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({ getLocale: { lang }}) => {

  return (
  <div className="about" id="about">
    <Container fluid>
      <CustomContainer>
          <h1>{localisation[lang].aboutTitle}</h1>
          <p>{localisation[lang].aboutText1}</p>
          <p>{localisation[lang].aboutText2}</p>
      </CustomContainer>
    </Container>
  </div>
  );
});

export default About;