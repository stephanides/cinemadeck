import './scss/product.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'react-apollo';
import { addProductToCartMutation } from '../../../../app-data/graphql/mutation';

const Product = graphql(addProductToCartMutation)(({
  mutate, productData,
}) => {
  const { title, price } = productData;
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
        <img src="/static/images/CARD-BOX.png" loading="lazy" alt="" />
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
              title,
              price,
              count: 1,
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

export default Product;
