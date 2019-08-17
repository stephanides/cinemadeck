import './scss/product.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = () => (
  <div className="product">
    <div className="product-bg">
      <img src="/static/images/CARD-BOX.png" loading="lazy" alt="" />
      <h4 className="text-uppercase d-flex justify-content-between">
        <span className="font-weight-lighter">Cinemadeck</span>
        <span className="font-weight-bold">
          37
          {''}
          <small className="align-top text-uppercase mt-1 ml-1">
            eur
          </small>
        </span>
      </h4>
      <h5 className="text-uppercase font-weight-bold d-flex justify-content-between mb-3">
        Cards
      </h5>
      <p className="mb-5 font-weight-lighter">První detailní instruktor pro profesionálníkompozicive vašem interview</p>
      <button
        type="button"
        className="button-add-to-cart text-uppercase"
      >
        Přidat do košíku
        {''}
        <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
      </button>
    </div>
    <p className="text-center text-blue text-uppercase">Zjistit více</p>
  </div>
);

export default Product;
