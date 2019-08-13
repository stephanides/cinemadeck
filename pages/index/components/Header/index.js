/* eslint-disable react/no-danger */
import './scss/header.scss';
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import CustomContainer from '../../../../app-data/shared/components/CustomContainer';
import localisation from '../../../../app-data/shared/localisation/Navigation';

const renderDangerHtml = lang => ({ __html: localisation[lang].headerText2 });

const Header = ({ lang }) => (
  <div className="header" id="header">
    <Container fluid>
      <img src="/static/images/vizual.png" alt="Vizuál" />
      <CustomContainer>
        <div className="text_holder">
          <p>{localisation[lang].headerText1}</p>
          <h3 className="pt-4" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
        </div>
        <button type="button">{localisation[lang].findOutMore}</button>
      </CustomContainer>
    </Container>
  </div>
);

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
