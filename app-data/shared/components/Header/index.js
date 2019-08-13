import React from 'react';
import { Container } from 'reactstrap';
import './scss/header.scss';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import CustomContainer from '../CustomContainer';
import localisation from '../../localisation/Navigation';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].headerText2 })
const Header = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({ getLocale: { lang }}) => {

  return (
  <div className="header" id="header">
    <Container fluid>
    <img src="/static/images/vizual.png" alt="Vizuál" />
      <CustomContainer>
        <div className="text_holder">
          <p>{localisation[lang].headerText1}</p>
          <h3 className="pt-4" dangerouslySetInnerHTML={renderDangerHtml(lang)}/>
        </div>
        <button>{localisation[lang].findOutMore}</button>
      </CustomContainer>
    </Container>
  </div>
  );
});

export default Header;