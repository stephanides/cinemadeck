/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/steps.scss';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Steps';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].stepsText1span });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].stepsText2span });
const renderDangerHtml3 = (lang) => ({ __html: localisation[lang].stepsText3span });
const Steps = ({ lang }) => (
  <div className="steps" id="steps">
    <Container fluid>
      <Container>
        <h2 className="text-center">{localisation[lang].stepsTitle}</h2>
        <div className="image-holder">
          <img src="/static/images/steps/image.png" alt="" />
          <p className="img-text img-text-1">{localisation[lang].stepsImageText1}</p>
          <p className="img-text img-text-2">{localisation[lang].stepsImageText2}</p>
          <p className="img-text img-text-3">{localisation[lang].stepsImageText2}</p>
        </div>
        <div className="items_holder">
          <Row>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>01</p>
                <i className="icono-arrow2-left" />
              </div>
              <h3 className="pt-2">{localisation[lang].stepsText1Header}</h3>
              <p className="icon_text">{localisation[lang].stepsText1p}</p>
              <p className="icon_text_light pt-2" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>02</p>
                <i className="icono-arrow2-left" />
              </div>
              <h3 className="pt-2">{localisation[lang].stepsText2Header}</h3>
              <p className="icon_text">{localisation[lang].stepsText2p}</p>
              <p className="icon_text_light pt-2" dangerouslySetInnerHTML={renderDangerHtml2(lang)} />
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>03</p>
                <i className="icono-arrow2-left" />
              </div>
              <h3 className="pt-2">{localisation[lang].stepsText3Header}</h3>
              <p className="icon_text">{localisation[lang].stepsText3p}</p>
              <p className="icon_text_light pt-2" dangerouslySetInnerHTML={renderDangerHtml3(lang)} />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  </div>
);

Steps.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Steps;
