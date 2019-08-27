/* eslint-disable react/no-danger */
import React from 'react';
import { Col, Row } from 'reactstrap';
import { graphql } from 'react-apollo';
import { addProductToCartMutation } from '../../../../../app-data/graphql/mutation';
import PropTypes from 'prop-types';

import locale from '../../../../../app-data/shared/localisation/eshop/funnel';

const Product = graphql(
  addProductToCartMutation,
)(({ data: { content, price, productTitle, title }, lang, mutate }) => {
  const handleAddProductToCart = async (product) => {
    try {
      await mutate({ variables: { product } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Row className="mb-5">
      <Col md="4" lg="4">
        <aside>
          <img src="/static/images/LIGHT-PRO.png" alt="" />
        </aside>
      </Col>
      <Col md="8" lg="8">
        <h3>{title}</h3>
        <p className="font-weight-lighter" dangerouslySetInnerHTML={{ __html: content }} />
        {
          /* <p>
            <button></button>
          </p> */
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
    price: PropTypes.number,
    productTitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  lang: PropTypes.string.isRequired,
};

export default Product;
