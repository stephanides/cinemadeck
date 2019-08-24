/* eslint-disable react/no-danger */

import './scss/unique.scss';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Unique';


const renderDangerHtml = (lang) => ({ __html: localisation[lang].uniqueCol2Header });
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
                <i className="icono-arrow2-left" />
              </div>
              <div className="iconHolder">
                <img src="/static/images/unique/icon3.png" className="icon" alt="Vizuál" />
              </div>
              <h3 className="pt-2">{localisation[lang].uniqueCol1Header}</h3>
              <p className="icon_text">{localisation[lang].uniqueCol1Text}</p>
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>02</p>
                <i className="icono-arrow2-left" />
              </div>
              <div className="iconHolder">
                <img src="/static/images/unique/icon2.png" className="icon" alt="Vizuál" />
              </div>
              <h3 className="pt-2" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
              <p className="icon_text">{localisation[lang].uniqueCol2Text}</p>
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>03</p>
                <i className="icono-arrow2-left" />
              </div>
              <div className="iconHolder">
                <img src="/static/images/unique/icon1.png" className="icon" alt="Vizuál" />
              </div>
              <h3 className="pt-2">{localisation[lang].uniqueCol3Header}</h3>
              <p className="icon_text">{localisation[lang].uniqueCol3Text}</p>
            </Col>
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
