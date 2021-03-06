/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { addProductToCartMutation } from '../../../../../graphql/mutation';

import styles from './styles/funnel-product.style';
import locale from '../../../../../shared/localisation/eshop/funnel';

const Product = graphql(
  addProductToCartMutation,
)(({
  data: {
    id, content, extraContent, image, price, title,
  }, lang, mutate, toggleLightBox,
}) => {
  const [infoShow, toggleInfo] = useState(false);
  const handleAddProductToCart = async (_id) => {
    try {
      await mutate({ variables: { id: _id } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="funnel-prod">
      <Row className="mb-5 pb-5">
        <Col sm="12" md="6" lg="4">
          <aside className="product-image">
            <LazyLoad height={280}>
              <img src={image} alt="" />
            </LazyLoad>
            {/*
              (extraContent && extraContent.infoLine && extraContent.infoContent) && (
                <button
                  type="button"
                  onClick={() => toggleLightBox(true)}
                >
                  <LazyLoad height={180}>
                    <img src={lang === 'cz' ? '/static/images/funnel/light-like-PRO-info-thumb.png' : '/static/images/funnel/light-like-PRO_EN-LS1-thumb.jpg'} alt="" />
                  </LazyLoad>
                </button>
              )
            */}
          </aside>
        </Col>
        <Col sm="12" md="6" lg="8">
          <h3 className="text-uppercase">{title}</h3>
          <p className="font-weight-lighter" dangerouslySetInnerHTML={{ __html: content }} />
          {
            (extraContent && extraContent.infoLine && extraContent.infoContent) && (
              <div>
                <p className="font-weight-lighter">
                  <button
                    className="infoLink text-uppercase"
                    type="button"
                    onClick={() => toggleInfo(!infoShow)}
                  >
                    <div
                      className={infoShow ? 'up' : 'down'}
                    />
                    {extraContent.infoLine}
                  </button>
                </p>
                <div className={infoShow ? 'infoshow' : 'infohide'}>
                  <p className="font-weight-lighter" dangerouslySetInnerHTML={{ __html: extraContent.infoContent }} />
                </div>
              </div>
            )
          }
          <div className="price-add-to-cart-container d-flex pt-3">
            <div className="position-relative">
              <span className="font-weight-bold align-top">
                {
                  lang === 'cz'
                    ? (
                      <div className="mr-2">
                        <span className="position-relative">
                          {price[0]}
                          <small className="align-top text-uppercase mt-1 ml-1 position-absolute">
                            czk
                          </small>
                        </span>
                        {' / '}
                        <span className="position-relative">
                          {price[1]}
                          <small className="align-top text-uppercase mt-1 ml-1 position-absolute">
                            eur
                          </small>
                        </span>
                      </div>
                    )
                    : (
                      <div className="mr-2">
                        <span className="position-relative">
                          {price[1]}
                          <small className="align-top text-uppercase mt-1 ml-1 position-absolute">
                            eur
                          </small>
                        </span>
                      </div>
                    )
                }
              </span>
            </div>
            <button
              type="button"
              className="ml-4 text-uppercase add-to-cart-button"
              onClick={() => {
                handleAddProductToCart(id);
              }}
            >
              {locale[lang].addToCart}
            </button>
          </div>
        </Col>
      </Row>
      <style jsx global>{styles}</style>
    </div>
  );
});

Product.propTypes = {
  toggleLightBox: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  data: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    extraContent: PropTypes.shape({
      infoLine: PropTypes.string,
      infoContent: PropTypes.string,
    }),
    image: PropTypes.string,
    price: PropTypes.arrayOf(PropTypes.number),
    productTitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  lang: PropTypes.string.isRequired,
};

export default Product;
