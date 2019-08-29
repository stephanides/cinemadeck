/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { addProductToCartMutation } from '../../../../../app-data/graphql/mutation';

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
    <Row className="mb-5">
      <Col sm="12" md="6" lg="4">
        <aside>
          <img src={image} alt="" />
        </aside>
      </Col>
      <Col sm="12" md="6" lg="8">
        <h3>{title}</h3>
        <p className="font-weight-lighter" dangerouslySetInnerHTML={{ __html: content }} />
        {
          (extraContent && extraContent.infoLine && extraContent.infoContent) && (
            <div>
              <p>
                <button
                  className={infoShow ? 'infoLink down' : 'infoLink up'}
                  type="button"
                  onClick={() => toggleInfo(!infoShow)}
                >
                  {extraContent.infoLine}
                </button>
              </p>
              <div className={infoShow ? 'd-block' : 'd-none'}>
                <p dangerouslySetInnerHTML={{ __html: extraContent.infoContent }} />
              </div>
            </div>
          )
        }
        <div className="price-add-to-cart-container d-flex pt-3">
          <div>
            <span className="font-weight-bold align-top">7</span>
            <span className="font-weight-lighter align-top">
              EUR
            </span>
          </div>
          <button
            type="button"
            className="ml-4 text-uppercase"
            onClick={() => {
              const product = {
                count: 1,
                price,
                title: productTitle,
              };

              handleAddProductToCart(product);
            }}
          >
            {locale[lang].addToCart}
          </button>
        </div>
        <style jsx>
          {
            `
              .price-add-to-cart-container > div > span {
                font-size: 5rem;
              }
              .price-add-to-cart-container > div > span:first-child {
                line-height: 70px;
              }
              .price-add-to-cart-container > div > span:last-child {
                font-size: 1rem;
              }
              .price-add-to-cart-container > button {
                background-color: #37baf1;
                border-radius: .25rem;
                border: 0;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: .85rem;
                height: 70px;
                width: 265px;
                letter-spacing: .15rem;
              }
              .show {
                opacity: 1;
              }
              .infoLink {
                border: 0;
                background-color: transparent;
                color: #00bcf5;
                outline: none;
                padding-left: 40px; 
                position: relative;
              }
              .up:before {
                content: '\\2228';
                border: 2px solid #00bcf5;
                border-radius: 50%;
                height: 25px;
                left: 0;
                position: absolute;
                width:25px;
              }
              .down:before {
                content: '\\2227';
                border: 2px solid #00bcf5;
                border-radius: 50%;
                height: 25px;
                left: 0;
                position: absolute;
                width:25px;
              }
            `
          }
        </style>
      </Col>
    </Row>
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
    price: PropTypes.number,
    productTitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  lang: PropTypes.string.isRequired,
};

export default Product;
