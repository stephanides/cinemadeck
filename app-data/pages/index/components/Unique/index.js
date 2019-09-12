/* eslint-disable react/no-danger */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import styles from './styles/unique.style';
import localisation from '../../../../shared/localisation/Unique';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].uniqueCol2Header });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].uniqueCol1Text });
const renderDangerHtml3 = (lang) => ({ __html: localisation[lang].uniqueCol2Text });
const renderDangerHtml4 = (lang) => ({ __html: localisation[lang].uniqueCol3Text });
const Unique = ({ lang }) => (
  <div className="unique" id="unique">
    <Container fluid>
      <Container>
        <h2 className="text-center">{localisation[lang].uniqueTitle}</h2>
        <LazyLoad height={700}>
          <img src="/static/images/unique/karty.png" alt="Vizuál" />
        </LazyLoad>
        <p className="text-center text-p">{localisation[lang].uniqueText}</p>
        <div className="items_holder">
          <Row>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>01</p>
                <i className="icono-arrow2-left" />
              </div>
              <div className="iconHolder">
                <LazyLoad height={60}>
                  <img src="/static/images/unique/icon3.png" className="icon" alt="Vizuál" />
                </LazyLoad>
              </div>
              <h3 className="pt-2">{localisation[lang].uniqueCol1Header}</h3>
              <p className="icon_text" dangerouslySetInnerHTML={renderDangerHtml2(lang)} />
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>02</p>
                <i className="icono-arrow2-left" />
              </div>
              <div className="iconHolder">
                <LazyLoad height={60}>
                  <img src="/static/images/unique/icon2.png" className="icon" alt="Vizuál" />
                </LazyLoad>
              </div>
              <h3 className="pt-2" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
              <p className="icon_text" dangerouslySetInnerHTML={renderDangerHtml3(lang)} />
            </Col>
            <Col lg="4">
              <div className="number_arrow d-flex">
                <p>03</p>
                <i className="icono-arrow2-left" />
              </div>
              <div className="iconHolder">
                <LazyLoad height={60}>
                  <img src="/static/images/unique/icon1.png" className="icon" alt="Vizuál" />
                </LazyLoad>
              </div>
              <h3 className="pt-2">{localisation[lang].uniqueCol3Header}</h3>
              <p className="icon_text" dangerouslySetInnerHTML={renderDangerHtml4(lang)} />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

Unique.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Unique;
