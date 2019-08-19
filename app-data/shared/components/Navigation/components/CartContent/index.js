/* eslint-disable react/no-array-index-key */
import React from 'react';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { addProductToCartMutation, removeProductFromCartMutation } from '../../../../../graphql/mutation';

const CartContent = compose(
  graphql(addProductToCartMutation, { name: 'addProductToCart' }),
  graphql(removeProductFromCartMutation, { name: 'removeProductFromCart' }),
)(({ cart, addProductToCart, removeProductFromCart }) => {
  const handleAddProductToCart = async (product) => {
    try {
      await addProductToCart({ variables: { product } });
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveProductFromCart = async (title) => {
    try {
      await removeProductFromCart({ variables: { title } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-100">
      {
        cart && cart.length > 0 && cart.map(
          (item, i) => (
            <div
              className="d-flex justify-content-between w-100"
              key={i}
            >
              <span className="font-weight-smaller">{`${item.count}x ${item.title}`}</span>
              <span className="font-weight-smaller">
                <strong>{item.totalPrice}</strong>
                {' '}
                EUR
                {' '}
                <button
                  type="button"
                  onClick={() => {
                    handleRemoveProductFromCart(item.title);
                  }}
                >
                  -
                </button>
                <button
                  className="border-left"
                  type="button"
                  onClick={() => {
                    const product = {
                      count: item.count,
                      price: item.price,
                      title: item.title,
                    };

                    handleAddProductToCart(product);
                  }}
                >
                  +
                </button>
              </span>
            </div>
          ),
        )
      }
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
      price: PropTypes.number,
      title: PropTypes.string,
      totalPrice: PropTypes.number,
    }),
  ),
};

export default CartContent;
