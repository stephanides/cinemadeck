/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import './scss/faq.scss';
import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import localisation from '../../../../app-data/shared/localisation/FAQ';
import Question from './components/Question';
import CustomContainer from '../../../../app-data/shared/components/CustomContainer';


const FAQ = ({ lang }) => (
  <div className="questions" id="questions">
    <Container fluid>
      <CustomContainer>
        <h2 className="text-center">{localisation[lang].faqTitle}</h2>
        <div className="holder">
          <Question
            itemData={{
              faqid: 'faq-1',
              questionText: localisation[lang].faqQuestion1,
              questionAnswer: localisation[lang].faqAnswer1,
            }}
          />
          <Question
            itemData={{
              faqid: 'faq-2',
              questionText: localisation[lang].faqQuestion2,
              questionAnswer: localisation[lang].faqAnswer2,
            }}
          />
          <Question
            itemData={{
              faqid: 'faq-3',
              questionText: localisation[lang].faqQuestion3,
              questionAnswer: localisation[lang].faqAnswer3,
            }}
          />
          <Question
            itemData={{
              faqid: 'faq-4',
              questionText: localisation[lang].faqQuestion4,
              questionAnswer: localisation[lang].faqAnswer4,
            }}
          />
          <Question
            itemData={{
              faqid: 'faq-5',
              questionText: localisation[lang].faqQuestion5,
              questionAnswer: localisation[lang].faqAnswer5,
            }}
          />
        </div>
        <Row className="faq-items" id="faq-items">
          <div className="column-5">
            <div className="faq-item">
              <h6>PRINT DATA</h6>
              <div className="img-holder">
                <img src="/static/images/faq/kartaprint.png" alt="" />
              </div>
            </div>
          </div>
          <div className="column-5">
            <div className="faq-item">
              <h6>MOBILE PDF</h6>
              <div className="img-holder">
                <img src="/static/images/faq/kartatelefon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="column-5">
            <div className="faq-item">
              <h6>TITLE PRESETS</h6>
              <div className="img-holder">
                <img className="presets" src="/static/images/faq/presets.png" alt="" />
              </div>
            </div>
          </div>
          <div className="column-5">
            <div className="faq-item">
              <h6>CHECKLIST</h6>
              <div className="img-holder">
                <img className="left-small" src="/static/images/faq/checklist.png" alt="" />
              </div>
            </div>
          </div>
          <div className="column-5">
            <div className="faq-item">
              <h6>GUIDE</h6>
              <div className="img-holder">
                <img className="left-small" src="/static/images/faq/guide.png" alt="" />
              </div>
            </div>
          </div>
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

FAQ.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default FAQ;
