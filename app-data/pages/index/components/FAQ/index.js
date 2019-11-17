/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { graphql } from 'react-apollo';
import Question from './components/Question';
import CustomContainer from '../../../../shared/components/CustomContainer';

import { addProductToCartMutation } from '../../../../graphql/mutation';
import styles from './styles/faq.style';
import localisation from '../../../../shared/localisation/FAQ';

const FAQ = graphql(addProductToCartMutation)(({ lang, mutate }) => {
  const handleAddProductToCart = async () => {
    try {
      await mutate({ variables: { id: '001' } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
                  <img loading="lazy" src={`/static/images/faq/${lang === 'cz' ? '' : 'en/'}kartaprint.png`} alt="" />
                </div>
              </div>
            </div>
            <div className="column-5">
              <div className="faq-item">
                <h6>MOBILE PDF</h6>
                <div className="img-holder">
                  <img loading="lazy" src={`/static/images/faq/${lang === 'cz' ? '' : 'en/'}kartatelefon.png`} alt="" />
                </div>
              </div>
              <img src="/static/images/faq/plus.png" className="plus" alt="" />
            </div>
            <div className="column-5">
              <div className="faq-item light-mobile">
                <h6>Light like pro</h6>
                <div className="img-holder">
                  <img loading="lazy" src={`/static/images/faq/${lang === 'cz' ? '' : 'en/'}LIGHT-PRO.png`} className="presets" alt="" />
                </div>
              </div>
              <img src="/static/images/faq/plus.png" className="plus" alt="" />
            </div>
            <div className="column-5">
              <div className="faq-item">
                <h6>CHECKLIST</h6>
                <div className="img-holder">
                  <LazyLoad height={250}>
                    <img className="left-small" src="/static/images/faq/checklist.png" alt="" />
                  </LazyLoad>
                </div>
              </div>
              <img src="/static/images/faq/plus.png" className="plus special-plus" alt="" />
            </div>
            <div className="column-5">
              <div className="faq-item">
                <h6>GUIDE</h6>
                <div className="img-holder">
                  <LazyLoad height={250}>
                    <img className="left-small" src="/static/images/faq/guide.png" alt="" />
                  </LazyLoad>
                </div>
              </div>
              <img src="/static/images/faq/plus.png" className="plus" alt="" />
            </div>
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
            <Link href={`/eshop/funnel?locale=${lang}`} as={`/${lang}/eshop/funnel`}>
              <button
                type="button"
                onClick={handleAddProductToCart}
                className="btn btn-link"
              >
                {localisation[lang].buyCinemaDeck}
              </button>
            </Link>
          </div>
        </CustomContainer>
      </Container>
      <style jsx global>{styles}</style>
    </div>
  );
});

FAQ.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default FAQ;
