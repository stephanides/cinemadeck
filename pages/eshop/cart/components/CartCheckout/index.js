/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import './scss/cartcheckout.scss';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { addProductToCartMutation, removeProductFromCartMutation } from '../../../../../app-data/graphql/mutation';

const CartCheckout = compose(
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
    <div className="cart-checkout-wrapper">
      <div className="bg-white position-fixed" />
      <div className="cart-checkout-container px-5">
        <h3 className="text-uppercase mb-5">Košík</h3>
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
                    <span className="text-uppercase">Celkem</span>
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
                    Koupit
                  </button>
                  <p><small>Všechny zakoupené produkty získáte na uvedený email v objednávce.</small></p>
                  <FormGroup check className="mb-5">
                    <Label check>
                      <Input type="checkbox" id="agree" name="agree" required />
                      {' '}
                      <small>
                        Souhlasím s podmínkami a se zpracováním osobních údajú
                      </small>
                      <div className="invalid-feedback">
                        Před odesláním objednávky musíte souhlasit.
                      </div>
                    </Label>
                  </FormGroup>
                  <div className="warranty">
                    <aside className="mr-2">
                      <img src="/static/images/refund.png" alt="" />
                    </aside>
                    <p>
                      Když vám karty nebudou z jakéhokoliv dúvodu během 30 dnú vyhovovat, napište nám email a my vám vrátíme všechny vaše peníze.
                    </p>
                  </div>
                </div>
              )
              : <p className="w-100 text-center">Košík je prázdny</p>
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
};

export default CartCheckout;
