/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles/compare.style';
import localisation from '../../../../shared/localisation/Compare';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].text1 });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].text2 });
const renderDangerHtml3 = (lang) => ({ __html: localisation[lang].text3 });
const title2 = (lang) => ({ __html: localisation[lang].title2 });

const Compare = ({ lang }) => (
  <div className="compare" id="compare">
    <div className="compare-head">
      <Container>
        <Row>
          <Col lg="6">
            <h2 className="text-left">{localisation[lang].title}</h2>
            <p className="subtitle">{localisation[lang].subtitle}</p>
            <p className="text-small" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
          </Col>
          <Col lg="6" className="lower-size">
            <img className="compare-img" alt="karty" src="/static/images/Compare/karty.png" />
          </Col>
        </Row>
      </Container>
    </div>
    <div className="imgWrapper">
      <Container>
        <h4 className="text-center" dangerouslySetInnerHTML={title2(lang)} />
        <p className="text-small" dangerouslySetInnerHTML={renderDangerHtml2(lang)} />
        <Row>
          <Col size="6">
            <h6 className="text-left">{localisation[lang].before}</h6>
            <img className="miniImg" alt="2018" src="/static/images/Compare/1.jpg" />
            <img className="miniImg" alt="2018" src="/static/images/Compare/3.jpg" />
            <img className="miniImg" alt="2018" src="/static/images/Compare/5.jpg" />
          </Col>
          <Col size="6">
            <h6 className="text-left">{localisation[lang].after}</h6>
            <img className="miniImg" alt="2018" src="/static/images/Compare/2.jpg" />
            <img className="miniImg" alt="2018" src="/static/images/Compare/4.jpg" />
            <img className="miniImg" alt="2018" src="/static/images/Compare/6.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
    <div className="mapWrapper">
      <Container>
        <h4 className="text-center">{localisation[lang].title3}</h4>
        <img alt="map" src="/static/images/Compare/map.png" />
        <p className="text-small" dangerouslySetInnerHTML={renderDangerHtml3(lang)} />
      </Container>
    </div>
    <style jsx global>{styles}</style>
  </div>
);

Compare.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Compare;
