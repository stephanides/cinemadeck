/* eslint-disable react/no-array-index-key */
import React from 'react';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { addProductToCartMutation, removeProductFromCartMutation } from '../../../../../graphql/mutation';

import styles from './styles/cart-content.style';

const CartContent = compose(
  graphql(addProductToCartMutation, { name: 'addProductToCart' }),
  graphql(removeProductFromCartMutation, { name: 'removeProductFromCart' }),
)(({
  cart, addProductToCart, removeProductFromCart, lang,
}) => {
  const handleAddProductToCart = async (id) => {
    try {
      await addProductToCart({ variables: { id } });
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveProductFromCart = async (id) => {
    try {
      await removeProductFromCart({ variables: { id } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-nav-content w-100 pt-2">
      {
        cart && cart.length > 0 && cart.map(
          (item, i) => (
            <div
              className="d-flex justify-content-between w-100 mb-3"
              key={i}
            >
              <span className="font-weight-smaller">{`${item.count}x ${item.title}`}</span>
              <span className="font-weight-smaller">
                {
                  lang === 'cz' && [
                    <strong className="position-relative" key={0}>
                      {item.totalPrice.cz}
                      <small className="position-absolute text-uppercase">czk</small>
                    </strong>,
                    <span key={1}> / </span>,
                  ]
                }
                <strong className="position-relative">
                  {item.totalPrice.en}
                  <small className="position-absolute text-uppercase">eur</small>
                </strong>
                {' '}
                <button
                  type="button"
                  onClick={() => {
                    handleRemoveProductFromCart(item.id);
                  }}
                >
                  -
                </button>
                <button
                  className="border-left"
                  type="button"
                  onClick={() => {
                    handleAddProductToCart(item.id);
                  }}
                >
                  +
                </button>
              </span>
            </div>
          ),
        )
      }
      <style jsx>{styles}</style>
    </div>
  );
});

CartContent.defaultProps = {
  cart: [],
};
CartContent.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      price: PropTypes.shape({
        cz: PropTypes.number,
        en: PropTypes.number,
      }),
      title: PropTypes.string,
      totalPrice: PropTypes.shape({
        cz: PropTypes.number,
        en: PropTypes.number,
      }),
    }),
  ),
  lang: PropTypes.string.isRequired,
};

export default CartContent;
