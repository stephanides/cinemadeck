/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  addProductToCartMutation, replaceCartWithData, removeProductFromCartMutation,
} from '../../../../../graphql/mutation';

import styles from './styles/cartcheckout.style';
import locale from '../../../../../shared/localisation/eshop/cart';

/* const cartDiscountData = [{
  id: '001',
  count: 1,
  price: {
    cz: 795.8, // 947
    en: 30.92, // 37
    __typename: 'Price',
  },
  title: 'CinemaDeck Cards',
  totalPrice: {
    cz: 796, // 947
    en: 31, // 37
    __typename: 'Price',
  },
  __typename: 'ProductInCart',
}, {
  id: '002',
  count: 1,
  price: {
    cz: 150, // 180
    en: 5.5, // 7
    __typename: 'Price',
  },
  title: 'Light Like Pro',
  totalPrice: {
    cz: 150, // 180
    en: 5.5, // 7
    __typename: 'Price',
  },
  __typename: 'ProductInCart',
}, {
  id: '003',
  price: {
    cz: 150, // 180
    en: 5.5, // 7
    __typename: 'Price',
  },
  title: 'Sound Like Pro',
  __typename: 'ProductInCart',
  count: 1,
  totalPrice: {
    cz: 150, // 180
    en: 5.5, // 7
    __typename: 'Price',
  },
}]; */

const CartCheckout = compose(
  graphql(replaceCartWithData, { name: 'replaceItemsInCart' }),
  graphql(addProductToCartMutation, { name: 'addProductToCart' }),
  graphql(removeProductFromCartMutation, { name: 'removeProductFromCart' }),
)(({
  cart, disabled, lang, /* addProductToCart, */ replaceItemsInCart,
  removeProductFromCart, orderDiscount, // stateSelected,
}) => {
  /* const handleAddProductToCart = async (id) => {
    try {
      await addProductToCart({ variables: { id } });
    } catch (err) {
      console.log(err);
    }
  }; */
  const handleOrderDiscount = async (disc) => {
    // pLyGkyrY6z - discount code
    try {
      await replaceItemsInCart({
        variables: {
          data: {
            products: ['001', '002', '003'],
            discount: disc,
          },
        },
      });
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

  useEffect(() => {
    if (orderDiscount && orderDiscount === 'pLyGkyrY7z') {
      handleOrderDiscount(0.24);
    }
    if (orderDiscount && orderDiscount === 'oGsGCEdBaD') {
      handleOrderDiscount(0.15);
    }
    if (orderDiscount && orderDiscount === 'nzf4dWvJku') {
      handleOrderDiscount(0.5);
    }

    // return () => handleOrderDiscount();
  }, []);

  return (
    <div className="cart-checkout-wrapper">
      <div className="bg-white position-fixed right-side" />
      <div className="cart-checkout-container px-5 pt-5">
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
                              lang === 'cz' && [
                                <span className="position-relative" key={0}>
                                  {item.totalPrice.cz}
                                  <small className="position-absolute text-uppercase">
                                    czk
                                  </small>
                                </span>,
                                <span key={1}>
                                  {' / '}
                                </span>,
                              ]
                            }
                            <span className="position-relative ml-1" key={2}>
                              {item.totalPrice.en}
                              <small className="position-absolute text-uppercase">
                                eur
                              </small>
                            </span>
                            {
                              lang === 'en' && [
                                <span key={0}>
                                  {' / '}
                                </span>,
                                <span className="position-relative" key={1}>
                                  {(item.totalPrice.en * 1.12).toFixed(2)}
                                  <small className="position-absolute text-uppercase">
                                    USD
                                  </small>
                                </span>,
                              ]
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
                              {/*
                                !orderDiscount && (
                                  <button
                                    type="button"
                                    className="border-left pl-3 d-flex align-items-center justify-content-center h-100"
                                    onClick={() => {
                                      handleAddProductToCart(item.id);
                                    }}
                                  >
                                    +
                                  </button>
                                )
                              */}
                            </span>
                          </span>
                        </span>
                      </p>
                    ))
                  }
                  <p className="d-flex justify-content-between sum">
                    <span className="text-uppercase">{locale[lang].sum}</span>
                    <span className="font-weight-bold">
                      {
                        lang === 'cz' && [
                          <span className="position-relative" key={0}>
                            {cart.reduce((a, b) => (a + b.totalPrice.cz), 0)}
                            <small className="text-uppercase position-absolute">
                              czk
                            </small>
                          </span>,
                          <span key={1}>
                            {' / '}
                          </span>,
                        ]
                      }
                      <span className="position-relative" key={2}>
                        {cart.reduce((a, b) => (a + b.totalPrice.en), 0)}
                        <small className="text-uppercase position-absolute">
                          eur
                        </small>
                      </span>
                      {
                        lang === 'en' && [
                          <span key={0}>
                            {' / '}
                          </span>,
                          <span className="position-relative" key={1}>
                            {(cart.reduce((a, b) => (a + b.totalPrice.en), 0) * 1.12).toFixed(2)}
                            <small className="position-absolute text-uppercase">
                              USD
                            </small>
                          </span>,
                        ]
                      }
                    </span>
                  </p>
                  <p className="text-right mb-5">{locale[lang].VAT}</p>
                  <p><small>{locale[lang].purchasedProductsInMail}</small></p>
                  <FormGroup check className="mb-5">
                    <Label check>
                      <Input type="checkbox" id="agree" name="agree" required />
                      {' '}
                      {locale[lang].agreeSentence}
                      <Link href={`/${lang}/obchodni-podminky?locale=${lang}`} as={`/${lang}/obchodni-podminky`}>
                        <a>
                          {locale[lang].agreeSentence1}
                        </a>
                      </Link>
                      {locale[lang].agreeSentence2}
                      <Link href={`/${lang}/ochrana-osobnych-udaju?locale=${lang}`} as={`/${lang}/ochrana-osobnych-udaju`}>
                        <a>
                          {locale[lang].agreeSentence3}
                        </a>
                      </Link>
                      <div className="invalid-feedback">
                        {locale[lang].agreeError}
                      </div>
                    </Label>
                  </FormGroup>
                  <button
                    disabled={disabled}
                    type="submit"
                    className="text-uppercase mx-auto mb-3"
                  >
                    {locale[lang].buy}
                  </button>
                  <img className="secure-payment" src="/static/images/gopay.png" alt="secure payment" />
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
