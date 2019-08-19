/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import './scss/cartcheckout.scss';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const CartCheckout = ({ cart }) => (
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
                      <span>{item.title}</span>
                      <span>
                        {item.totalPrice}
                        {' '}
                        EUR
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
                  Objednat
                </button>
                <FormGroup check className="mb-5">
                  <Label check>
                    <Input type="checkbox" id="agree" name="agree" />
                    {' '}
                    <small>
                      Souhlasím s podmínkami a se zpracováním osobních údajú
                    </small>
                  </Label>
                </FormGroup>
                <div>
                  <aside>
                    <img alt="" />
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
