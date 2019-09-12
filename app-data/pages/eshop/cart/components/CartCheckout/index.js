/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { addProductToCartMutation, removeProductFromCartMutation } from '../../../../../graphql/mutation';

import styles from './styles/cartcheckout.style';
import locale from '../../../../../shared/localisation/eshop/cart';

const CartCheckout = compose(
  graphql(addProductToCartMutation, { name: 'addProductToCart' }),
  graphql(removeProductFromCartMutation, { name: 'removeProductFromCart' }),
)(({
  cart, lang, addProductToCart, removeProductFromCart, stateSelected,
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
                            ? 'cart-item d-flex justify-content-between w-100 mb-5'
                            : 'cart-item d-flex justify-content-between w-100'
                        }
                        key={i}
                      >
                        <span>{`${item.count}x ${item.title}`}</span>
                        <span className="d-flex">
                          <span>
                            {
                              stateSelected < 1
                                ? [
                                  <span className="position-relative" key={0}>
                                    {item.totalPrice.cz}
                                    <small className="position-absolute text-uppercase">
                                      czk
                                    </small>
                                  </span>,
                                  <span key={1}>
                                    {' / '}
                                  </span>,
                                  <span className="position-relative ml-1" key={2}>
                                    {item.totalPrice.en}
                                    <small className="position-absolute text-uppercase">
                                      eur
                                    </small>
                                  </span>,
                                ] : (
                                  stateSelected > 1
                                    ? (
                                      <span className="position-relative">
                                        {item.totalPrice.en}
                                        <small className="position-absolute text-uppercase">
                                          eur
                                        </small>
                                      </span>
                                    ) : (
                                      <span className="position-relative">
                                        {item.totalPrice.cz}
                                        <small className="position-absolute text-uppercase">
                                          czk
                                        </small>
                                      </span>
                                    )
                                )
                            }
                          </span>
                          <span className="ml-4">
                            <span className="d-flex justify-content-between">
                              <button
                                type="button"
                                className="d-flex align-items-center justify-content-center h-100"
                                onClick={() => {
                                  handleRemoveProductFromCart(item.id);
                                }}
                              >
                                -
                              </button>
                              <button
                                type="button"
                                className="border-left pl-3 d-flex align-items-center justify-content-center h-100"
                                onClick={() => {
                                  handleAddProductToCart(item.id);
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
                        stateSelected < 1
                          ? [
                            <span className="position-relative" key={0}>
                              {cart.reduce((a, b) => (a + b.totalPrice.cz), 0)}
                              <small className="text-uppercase position-absolute">
                                czk
                              </small>
                            </span>,
                            <span key={1}>
                              {' / '}
                            </span>,
                            <span className="position-relative" key={2}>
                              {cart.reduce((a, b) => (a + b.totalPrice.en), 0)}
                              <small className="text-uppercase position-absolute">
                                eur
                              </small>
                            </span>,
                          ] : (
                            stateSelected > 1 ? (
                              <span className="position-relative" key={2}>
                                {cart.reduce((a, b) => (a + b.totalPrice.en), 0)}
                                <small className="text-uppercase position-absolute">
                                  eur
                                </small>
                              </span>
                            ) : (
                              <span className="position-relative" key={0}>
                                {cart.reduce((a, b) => (a + b.totalPrice.cz), 0)}
                                <small className="text-uppercase position-absolute">
                                  czk
                                </small>
                              </span>
                            )
                          )
                      }
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
      <style jsx>{styles}</style>
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
  stateSelected: PropTypes.number.isRequired,
};

export default CartCheckout;
