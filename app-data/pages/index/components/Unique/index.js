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
const renderDangerHtmlBuble1 = (lang) => ({ __html: localisation[lang].buble1 });
const renderDangerHtmlBuble2 = (lang) => ({ __html: localisation[lang].buble2 });
const renderDangerHtmlBuble3 = (lang) => ({ __html: localisation[lang].buble3 });
const renderDangerHtmlBuble4 = (lang) => ({ __html: localisation[lang].buble4 });

const Unique = ({ lang }) => (
  <div className="unique" id="unique">
    <Container fluid>
      <Container>
        <h2 className="text-center">{localisation[lang].uniqueTitle}</h2>
        <div className="unique-image-holder">
          <div className="buble-holder buble1">
            <p className="icon_text" dangerouslySetInnerHTML={renderDangerHtmlBuble1(lang)} />
            <LazyLoad height={60}>
              <img src="/static/images/unique/arrow.png" className="icon" alt="Arrow" />
            </LazyLoad>
          </div>
          <div className="buble-holder buble2">
            <p className="icon_text" dangerouslySetInnerHTML={renderDangerHtmlBuble2(lang)} />
            <LazyLoad height={60}>
              <img src="/static/images/unique/arrow.png" className="icon" alt="Arrow" />
            </LazyLoad>
          </div>
          <div className="buble-holder buble3">
            <p className="icon_text" dangerouslySetInnerHTML={renderDangerHtmlBuble3(lang)} />
            <LazyLoad height={60}>
              <img src="/static/images/unique/arrow.png" className="icon" alt="Arrow" />
            </LazyLoad>
          </div>
          <div className="buble-holder buble4">
            <p className={lang === 'cz' ? 'icon_text unique-text' : 'icon_text unique-text'} dangerouslySetInnerHTML={renderDangerHtmlBuble4(lang)} />
            <LazyLoad height={60}>
              <img src="/static/images/unique/arrow.png" className="icon" alt="Arrow" />
            </LazyLoad>
          </div>
          <LazyLoad height={700}>
            <img src={`/static/images/unique/${lang === 'cz' ? '' : 'en/'}karty.png`} alt="" />
          </LazyLoad>
        </div>
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
              <h3 className="pt-2 pr-4">{localisation[lang].uniqueCol1Header}</h3>
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
