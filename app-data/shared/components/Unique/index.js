import React from 'react';
import { Container } from 'reactstrap';
import './scss/unique.scss';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import CustomContainer from '../CustomContainer';
import localisation from '../../localisation/Navigation';

const Unique = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({ getLocale: { lang }}) => {

  return (
  <div className="unique" id="unique">
    <Container fluid>
      <Container>
          <h2 className="text-center">{localisation[lang].uniqueTitle}</h2>
          <img src="/static/images/unique/karty.png" alt="Vizuál" />
          
      </Container>
    </Container>
  </div>
  );
});

export default Unique;