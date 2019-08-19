import './scss/unique.scss';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Navigation';

const Unique = ({ lang }) => (
  <div className="unique" id="unique">
    <Container fluid>
      <Container>
        <h2 className="text-center">{localisation[lang].uniqueTitle}</h2>
        <img src="/static/images/unique/karty.png" alt="Vizuál" />
        <p className="text-center text-p">{localisation[lang].uniqueText}</p>
        <div className="items_holder">
          <Row>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>01</p>
                <i className="icono-arrow2-left"></i>
              </div>
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>02</p>
                <i className="icono-arrow2-left"></i>
              </div>
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p >03</p>
                <i className="icono-arrow2-left"></i>
              </div></Col>
          </Row>
        </div>
      </Container>
    </Container>
  </div>
);

Unique.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Unique;
