/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import './scss/package.scss';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import localisation from '../../../../app-data/shared/localisation/Package';
import CustomContainer from '../../../../app-data/shared/components/CustomContainer';

const Package = ({ lang }) => (
  <div className="package" id="package">
    <Container fluid>
      <CustomContainer>
        <h2>{localisation[lang].packageTitle}</h2>
        <Row>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol1Title}</h6>
            <div className="img-holder">
              <img src="/static/images/package/kartaprint.png" className="unique-img" alt="" />
              <img src="/static/images/package/pdf.png" className="unique-pdf-icon" alt="" />
            </div>
            <p className="text-header">{localisation[lang].packageCol1Header}</p>
            <p className="text-text">{localisation[lang].packageCol1Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol2Title}</h6>
            <div className="img-holder">
              <img src="/static/images/package/kartatelefon.png" alt="" />
              <img src="/static/images/package/pdf.png" className="pdf-icon" alt="" />
            </div>
            <p className="text-header">{localisation[lang].packageCol2Header}</p>
            <p className="text-text">{localisation[lang].packageCol2Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol3Title}</h6>
            <div className="img-holder">
              <img src="/static/images/package/kartapresets.png" className="presets-img" alt="" />
            </div>
            <p className="text-header">{localisation[lang].packageCol3Header}</p>
            <p className="text-text">{localisation[lang].packageCol3Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol4Title}</h6>
            <div className="img-holder">
              <img src="/static/images/package/kartachecklist.png" className="img-right" alt="" />
              <img src="/static/images/package/pdf.png" className="pdf-icon" alt="" />
            </div>
            <p className="text-header">{localisation[lang].packageCol4Header}</p>
            <p className="text-text">{localisation[lang].packageCol4Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol5Title}</h6>
            <div className="img-holder">
              <img src="/static/images/package/kartaguide.png" className="img-right" alt="" />
              <img src="/static/images/package/pdf.png" className="pdf-icon" alt="" />
            </div>
            <p className="text-header">{localisation[lang].packageCol5Header}</p>
            <p className="text-text">{localisation[lang].packageCol5Text}</p>
          </Col>
          <Col xl="4" md="6" sm="12">
            <h6 className="text-center">{localisation[lang].packageCol6Title}</h6>
            <div className="img-holder">
              <img src="/static/images/package/warianty.png" alt="" />
            </div>
            <p className="text-header">{localisation[lang].packageCol6Header}</p>
            <p className="text-text">{localisation[lang].packageCol6Text}</p>
          </Col>
        </Row>
        <div className="buy-package-holder">
          <p className="text-complete">{localisation[lang].faqPackageText}</p>
          <p className="price">
            {localisation[lang].packagePrice}
            <span className="currency">{localisation[lang].packageCurrency}</span>
          </p>
          <p className="miniprice">
            {localisation[lang].packagePriceLittle}
            <span className="currency">{localisation[lang].packageCurrencyLittle}</span>
          </p>
          <Link href="/eshop">
            <a>{localisation[lang].buyCinemaDeck}</a>
          </Link>
        </div>
      </CustomContainer>
    </Container>
  </div>
);

Package.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Package;
