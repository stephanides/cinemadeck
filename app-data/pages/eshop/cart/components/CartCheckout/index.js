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

const renderDangerHtml = (lang) => ({ __html: locale[lang].offerHead });

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
  cart, disabled, lang, addProductToCart, replaceItemsInCart,
  removeProductFromCart, orderDiscount, // stateSelected,
}) => {
  /* const handleAddProductToCart = async (id) => {
    try {
      await addProductToCart({ variables: { id } });
    } catch (err) {
      console.log(err);
    }
  }; */
  const handleAddProductToCart = async () => {
    try {
      await addProductToCart({ variables: { id: '002' } });
    } catch (err) {
      console.log(err);
    }
  };
  const handleOrderDiscount = async (disc) => {
    // pLyGkyrY6z - discount code
    try {
      await replaceItemsInCart({
        variables: {
          data: {
            products: ['001'], // ['001', '002', '003']
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
    if (orderDiscount && orderDiscount === 'nzf50dWvJku') {
      handleOrderDiscount(0.5);
    }
    if (orderDiscount && orderDiscount === 'nzf15dWvJku') {
      handleOrderDiscount(0.15);
    }
    if (orderDiscount && orderDiscount === 'nzf20dWvJku') {
      handleOrderDiscount(0.2);
    }

    // return () => handleOrderDiscount();
  }, []);

  return (
    <div className="cart-checkout-wrapper">
      <div className="bg-white position-fixed right-side" />
      <div className="cart-checkout-container ">
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
                                  {Math.round(item.totalPrice.en * 1.08)}
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
                                className="d-flex align-items-center justify-content-center h-100 remove-button"
                                onClick={() => {
                                  handleRemoveProductFromCart(item.id);
                                }}
                              >
                                x
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
                            {Math.round(cart.reduce((a, b) => (a + b.totalPrice.en), 0) * 1.08)}
                            <small className="position-absolute text-uppercase">
                              USD
                            </small>
                          </span>,
                        ]
                      }
                    </span>
                  </p>
                  <p className="text-right mb-5">{locale[lang].VAT}</p>
                  <div className="funnel">
                    <div className="funnel-head">
                      <h6>{locale[lang].limitedOffer}</h6>
                      <h5 dangerouslySetInnerHTML={renderDangerHtml(lang)} />
                    </div>
                    <div className="content">
                      <img src="/static/images/cart/box.png" alt="box" />
                      <div className="items">
                        <div className="item">
                          <img src="/static/images/cart/done.png" alt="check" />
                          <div>
                            <h4>SOUND LIKE PRO</h4>
                            <p>{locale[lang].firstCheck}</p>
                            <span>{locale[lang].firstPrice}</span>
                          </div>
                        </div>
                        <div className="item">
                          <img src="/static/images/cart/done.png" alt="check" />
                          <div>
                            <h4>TITLE PRESETS</h4>
                            <p>{locale[lang].secondCheck}</p>
                            <span>{locale[lang].secondPrice}</span>
                          </div>
                        </div>
                        <div className="item">
                          <img src="/static/images/cart/done.png" alt="check" />
                          <div>
                            <h4>LOWER THIRDS</h4>
                            <p>{locale[lang].thirdCheck}</p>
                            <span>{locale[lang].thirdPrice}</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="cart-button"
                          onClick={() => handleAddProductToCart()}
                        >
                          {locale[lang].addButton}
                        </button>
                        <div className="price-holder">
                          <div>
                            <p className="price">
                              {locale[lang].lowerThirdsPrice}
                              <span className="currency">{locale[lang].lowerThirdsCurrency}</span>
                            </p>
                            <p className="price_low">
                              {locale[lang].lowerThirdsBottomPrice}
                            </p>
                          </div>
                          <div className="with-cross">
                            <div className="cross" />
                            <p className="price-action">
                              {locale[lang].lowerThirdsPriceAction}
                              <span className="currency">{locale[lang].lowerThirdsCurrencyAction}</span>
                            </p>
                            <p className="price_low_action">
                              {locale[lang].lowerThirdsBottomPriceAction}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <FormGroup check className="mb-5 form-check-flex">
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
                  <p className="all-products"><small>{locale[lang].purchasedProductsInMail}</small></p>
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
