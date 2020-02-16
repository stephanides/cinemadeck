/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles/compare.style';
import localisation from '../../../../shared/localisation/Compare';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].text1 });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].text2 });

const Compare = ({ lang }) => (
  <div className="compare" id="compare">
    <Container>
      <h2 className="text-center">{localisation[lang].title}</h2>
      <p className="text-p" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
    </Container>
    <div className="imgWrapper">
      <Container>
        <Row>
          <Col lg="4" md="12" className="imgHolder">
            <div className="start">
              <p>2018</p>
              <img className="miniImg" alt="2018" src="/static/images/Compare/1.png" />
            </div>
            <div className="start">
              <p><strong>2019</strong></p>
              <img className="miniImg" alt="2018" src="/static/images/Compare/2.png" />
            </div>
          </Col>
          <Col lg="4" md="12" className="imgHolder">
            <div className="divider left" />
            <div className="later">
              <p>2018</p>
              <img className="miniImg" alt="2018" src="/static/images/Compare/3.png" />
            </div>
            <div className="later">
              <p><strong>2019</strong></p>
              <img className="miniImg" alt="2018" src="/static/images/Compare/4.png" />
            </div>
            <div className="divider right" />
          </Col>
          <Col lg="4" md="12" className="imgHolder desktop">
            <div className="end">
              <img className="miniImg" alt="2018" src="/static/images/Compare/5.png" />
              <p>2018</p>
            </div>
            <div className="end">
              <img className="miniImg" alt="2018" src="/static/images/Compare/6.png" />
              <p><strong>2019</strong></p>
            </div>
          </Col>
          <Col lg="4" md="12" className="imgHolder mobile">
            <div className="end">
              <p>2018</p>
              <img className="miniImg" alt="2018" src="/static/images/Compare/5.png" />
            </div>
            <div className="end">
              <p><strong>2019</strong></p>
              <img className="miniImg" alt="2018" src="/static/images/Compare/6.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <h2 className="text-center">{localisation[lang].title2}</h2>
      <p className="text-p" dangerouslySetInnerHTML={renderDangerHtml2(lang)} />
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

Compare.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Compare;
