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
    <Row className="mb-5 pb-5">
      <Col sm="12" md="6" lg="4">
        <aside className="product-image">
          <img src={image} alt="" />
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
          <div>
            <span className="font-weight-bold align-top">7</span>
            <span className="font-weight-lighter align-top">
              EUR
            </span>
          </div>
          <button
            type="button"
            className="ml-4 text-uppercase add-to-cart-button"
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
      </Col>
      <style jsx>
        {
          `
            .product-image img {
              display: block;
              margin: 0 auto;
            }
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
            .price-add-to-cart-container > button:hover {
              background-color: #0098d8;
            }
            .show {
              opacity: 1;
            }
            .infoLink {
              border: 0;
              background-color: transparent;
              color: #00bcf5;
              display: flex;
              justify-content: space-between;
              outline: none;
              position: relative;
            }
            .infoLink > div {
              border: 2px solid #00bcf5;
              border-radius: 50%;
              height: 25px;
              margin-right: 1rem;
              position: relative;
              width: 25px;
            };
            .infoLink > div.up:before {
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-bottom: 8px solid #00bcf5;
              content: '';
              height: 0;
              position: absolute;
              width: 0;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .infoLink > div.up:after {
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-bottom: 6px solid #fff;
              content: '';
              height: 0;
              position: absolute;
              width: 0;
              top: calc(50% + 2px);
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .infoLink > div.down:before {
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: 8px solid #00bcf5;
              content: '';
              height: 0;
              position: absolute;
              width: 0;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .infoLink > div.down:after {
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-top: 6px solid #fff;
              content: '';
              height: 0;
              position: absolute;
              width: 0;
              top: calc(50% - 2px);
              left: 50%;
              transform: translate(-50%, -50%);
            }
          `
        }
      </style>
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
