/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import styles from './styles/package.style';
import localisation from '../../../../shared/localisation/Package';
import CustomContainer from '../../../../shared/components/CustomContainer';

const Package = ({ lang }) => (
  <div className="package" id="package">
    <Container fluid>
      <CustomContainer>
        <h2>{localisation[lang].packageTitle}</h2>
        <Row>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol1Title}</h6>
            <div className="img-holder">
              <LazyLoad height={250}>
                <img src="/static/images/package/en/kartaprint.png" className={lang === 'cz' ? 'd-none unique-img' : 'd-block unique-img'} alt="" />
              </LazyLoad>
              <LazyLoad height={250}>
                <img src="/static/images/package/kartaprint.png" className={lang === 'cz' ? 'd-block unique-img' : 'd-none unique-img'} alt="" />
              </LazyLoad>
              <LazyLoad height={250}>
                <img src="/static/images/package/pdf.png" className="unique-pdf-icon" alt="" />
              </LazyLoad>
            </div>
            <p className="text-header">{localisation[lang].packageCol1Header}</p>
            <p className="text-text">{localisation[lang].packageCol1Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol2Title}</h6>
            <div className="img-holder">
              <LazyLoad height={250}>
                <img src="/static/images/package/en/kartatelefon.png" className={lang === 'cz' ? 'd-none unique-img' : 'd-block unique-img'} alt="" />
              </LazyLoad>
              <LazyLoad height={250}>
                <img src="/static/images/package/kartatelefon.png" className={lang === 'cz' ? 'd-block unique-img' : 'd-none unique-img'} alt="" />
              </LazyLoad>
              <LazyLoad height={250}>
                <img src="/static/images/package/pdf.png" className="pdf-icon" alt="" />
              </LazyLoad>
            </div>
            <p className="text-header">{localisation[lang].packageCol2Header}</p>
            <p className="text-text">{localisation[lang].packageCol2Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol3Title}</h6>
            <div className="img-holder">
              <LazyLoad height={250}>
                <img src="/static/images/package/en/kartapresets.png" className={lang === 'cz' ? 'd-none unique-img' : 'd-block unique-img'} alt="" />
              </LazyLoad>
              <LazyLoad height={250}>
                <img src="/static/images/package/kartapresets.png" className={lang === 'cz' ? 'd-block unique-img' : 'd-none unique-img'} alt="" />
              </LazyLoad>
            </div>
            <p className="text-header">{localisation[lang].packageCol3Header}</p>
            <p className="text-text">{localisation[lang].packageCol3Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol4Title}</h6>
            <div className="img-holder">
              <LazyLoad height={250}>
                <img src="/static/images/package/kartachecklist.png" className="img-right" alt="" />
              </LazyLoad>
              <LazyLoad height={250}>
                <img src="/static/images/package/pdf.png" className="pdf-icon" alt="" />
              </LazyLoad>
            </div>
            <p className="text-header">{localisation[lang].packageCol4Header}</p>
            <p className="text-text">{localisation[lang].packageCol4Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol5Title}</h6>
            <div className="img-holder">
              <LazyLoad height={250}>
                <img src="/static/images/package/kartaguide.png" className="img-right" alt="" />
              </LazyLoad>
              <LazyLoad height={250}>
                <img src="/static/images/package/pdf.png" className="pdf-icon" alt="" />
              </LazyLoad>
            </div>
            <p className="text-header">{localisation[lang].packageCol5Header}</p>
            <p className="text-text">{localisation[lang].packageCol5Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol6Title}</h6>
            <div className="img-holder">
              <LazyLoad height={250}>
                <img src="/static/images/package/warianty.png" alt="" />
              </LazyLoad>
            </div>
            <p className="text-header">{localisation[lang].packageCol6Header}</p>
            <p className="text-text">{localisation[lang].packageCol6Text}</p>
          </Col>
        </Row>
        <div className="buy-package-holder">
          <p className="text-complete">{localisation[lang].faqPackageText}</p>
          <div className="price-holder">
            <p className={lang === 'cz' ? 'd-block price' : 'd-none price'}>
              947
              <span className="currency">CZK</span>
              &nbsp;/
            </p>
            <p className="price">
              37
              <span className="currency">EUR</span>
            </p>
          </div>
          <Link href="/eshop/funnel">
            <a>{localisation[lang].buyCinemaDeck}</a>
          </Link>
        </div>
      </CustomContainer>
    </Container>
    <style jsx>{styles}</style>
  </div>
);

Package.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Package;
