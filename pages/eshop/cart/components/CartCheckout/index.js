/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import './scss/cartcheckout.scss';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { addProductToCartMutation, removeProductFromCartMutation } from '../../../../../app-data/graphql/mutation';

import locale from '../../../../../app-data/shared/localisation/cart';

const CartCheckout = compose(
  graphql(addProductToCartMutation, { name: 'addProductToCart' }),
  graphql(removeProductFromCartMutation, { name: 'removeProductFromCart' }),
)(({
  cart, lang, addProductToCart, removeProductFromCart,
}) => {
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
    <div className="cart-checkout-wrapper">
      <div className="bg-white position-fixed" />
      <div className="cart-checkout-container px-5">
        <h3 className="text-uppercase mb-5">{locale[lang].cart}</h3>
        <div className="checkout-content">
          {
            cart && cart.length > 0
              ? (
                <div>
                  {
                    cart.map((item, i) => (
                      <p
                        className={
                          i === cart.length - 1
                            ? 'd-flex justify-content-between w-100 mb-5'
                            : 'd-flex justify-content-between w-100'
                        }
                        key={i}
                      >
                        <span>{`${item.count}x ${item.title}`}</span>
                        <span className="d-flex">
                          {item.totalPrice}
                          {' '}
                          EUR
                          {' '}
                          <span className="ml-3">
                            <span className="d-flex justify-content-between">
                              <button
                                type="button"
                                className="d-flex align-items-center justify-content-center h-100"
                                onClick={() => {
                                  handleRemoveProductFromCart(item.title);
                                }}
                              >
                                -
                              </button>
                              <button
                                type="button"
                                className="border-left pl-3 d-flex align-items-center justify-content-center h-100"
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
                          </span>
                        </span>
                      </p>
                    ))
                  }
                  <p className="d-flex justify-content-between sum mb-5">
                    <span className="text-uppercase">{locale[lang].sum}</span>
                    <span className="font-weight-bold">
                      {
                        cart.reduce((a, b) => (a + b.totalPrice), 0)
                      }
                      {' '}
                      EUR
                    </span>
                  </p>
                  <button
                    type="submit"
                    className="text-uppercase mx-auto mb-3"
                  >
                    {locale[lang].buy}
                  </button>
                  <p><small>{locale[lang].purchasedProductsInMail}</small></p>
                  <FormGroup check className="mb-5">
                    <Label check>
                      <Input type="checkbox" id="agree" name="agree" required />
                      {' '}
                      <small>
                        {locale[lang].agreeSentence}
                      </small>
                      <div className="invalid-feedback">
                        {locale[lang].agreeError}
                      </div>
                    </Label>
                  </FormGroup>
                  <div className="warranty">
                    <aside className="mr-2">
                      <img src="/static/images/refund.png" alt="" />
                    </aside>
                    <p>
                      {locale[lang].refund}
                    </p>
                  </div>
                </div>
              )
              : <p className="w-100 text-center">{locale[lang].cartIsEmpty}</p>
          }
        </div>
      </div>
    </div>
  );
});

CartCheckout.defaultProps = {
  cart: [],
};
CartCheckout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      price: PropTypes.number,
      title: PropTypes.string,
      totalPrice: PropTypes.number,
    }),
  ),
  lang: PropTypes.string.isRequired,
};

export default CartCheckout;
