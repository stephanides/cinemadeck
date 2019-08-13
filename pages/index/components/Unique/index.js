import './scss/unique.scss';
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Navigation';

const Unique = ({ lang }) => (
  <div className="unique" id="unique">
    <Container fluid>
      <Container>
        <h2 className="text-center">{localisation[lang].uniqueTitle}</h2>
        <img src="/static/images/unique/karty.png" alt="Vizuál" />
      </Container>
    </Container>
  </div>
);

Unique.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Unique;
