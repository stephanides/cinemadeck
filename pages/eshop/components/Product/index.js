import './scss/product.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { addProductToCartMutation } from '../../../../app-data/graphql/mutation';

const Product = graphql(
  addProductToCartMutation,
)(({ mutate, productData }) => {
  const { imageURL, price, title } = productData;

  const handleAddProductToCart = async (product) => {
    try {
      await mutate({ variables: { product } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product">
      <div className="product-bg">
        <img
          src={imageURL}
          loading="lazy"
          alt=""
          width={350}
          height={280}
        />
        <h4 className="text-uppercase d-flex justify-content-between">
          <span className="font-weight-lighter">Cinemadeck</span>
          <span className="font-weight-bold">
            {price}
            {''}
            <small className="align-top text-uppercase mt-1 ml-1">
              eur
            </small>
          </span>
        </h4>
        <h5 className="text-uppercase font-weight-bold d-flex justify-content-between mb-3">
          {title}
        </h5>
        <p className="mb-5 font-weight-lighter">První detailní instruktor pro profesionálníkompozicive vašem interview</p>
        <button
          type="button"
          className="button-add-to-cart text-uppercase"
          onClick={() => {
            const product = {
              count: 1,
              price,
              title,
            };

            handleAddProductToCart(product);
          }}
        >
          Přidat do košíku
          {''}
          <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
        </button>
      </div>
      <p className="text-center text-blue text-uppercase">Zjistit více</p>
    </div>
  );
});

Product.propTypes = {
  productData: PropTypes.shape({
    imageURL: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Product;
