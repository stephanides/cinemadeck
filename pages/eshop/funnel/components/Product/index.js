/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { addProductToCartMutation } from '../../../../../app-data/graphql/mutation';

import styles from './styles/funnel-product.style';
import locale from '../../../../../app-data/shared/localisation/eshop/funnel';

const Product = graphql(
  addProductToCartMutation,
)(({
  data: {
    content, extraContent, image, price, productTitle, title,
  }, lang, mutate,
}) => {
  const [infoShow, toggleInfo] = useState(false);
  const handleAddProductToCart = async (product) => {
    try {
      await mutate({ variables: { product } });
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
                    className="infoLink"
                    type="button"
                    onClick={() => toggleInfo(!infoShow)}
                  >
                    <div
                      className={infoShow ? 'up' : 'down'}
                    />
                    {extraContent.infoLine}
                  </button>
                </p>
                <div className={infoShow ? 'd-block' : 'd-none'}>
                  <p className="font-weight-lighter" dangerouslySetInnerHTML={{ __html: extraContent.infoContent }} />
                </div>
              </div>
            )
          }
          <div className="price-add-to-cart-container d-flex pt-3">
            <div className="position-relative">
              <span className="font-weight-bold align-top">
                {/* lang === 'cz' ? `${price[0]}/${price[1]}` : price[1] */}
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
                      <div>
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
              {
                /* <span className="font-weight-lighter align-top">
                  {lang === 'cz' ? 'CZK/EUR' : 'EUR'}
                </span> */
              }
            </div>
            <button
              type="button"
              className="ml-4 text-uppercase add-to-cart-button"
              onClick={() => {
                const product = {
                  count: 1,
                  price: lang === 'cz' ? price[0] : price[1],
                  title: productTitle,
                };

                handleAddProductToCart(product);
              }}
            >
              {locale[lang].addToCart}
            </button>
          </div>
        </Col>
      </Row>
      <style jsx>{styles}</style>
    </div>
  );
});

Product.propTypes = {
  data: PropTypes.shape({
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
