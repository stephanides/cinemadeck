import './scss/product.scss';
import React from 'react';
import { Button } from 'reactstrap';

const Product = () => (
  <div className="product">
    <div className="product-bg">
      <img src="/static/images/CARD-BOX.png" loading="lazy" alt="" />
      <h4 className="text-uppercase">Cinemadeck</h4>
      <h5 className="text-uppercase d-flex justify-content-between">
        <span>Cards</span>
        <span>37eur</span>
      </h5>
      <p className="mb-5">První detailní instruktor pro profesionálníkompozicive vašem interview</p>
      <Button className="button-link text-uppercase">Přidat do košíku</Button>
    </div>
    <p className="text-center text-uppercase mt-5">Zjistit více</p>
  </div>
);

export default Product;
