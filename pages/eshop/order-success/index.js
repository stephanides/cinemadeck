import React from 'react';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import Layout from '../../../app-data/shared/components/Layout';

import styles from '../../../app-data/pages/eshop/order-success/styles/order-success.style';

const DynamicFooter = dynamic(import('../../../app-data/shared/components/Footer'));

const OrderSuccess = compose(
  graphql(getLocaleQuery),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
)(({ data: { lang }, cartProducts: { cart } }) => (
  <Layout
    cart={cart}
    lang={lang}
    isHome={false}
  >
    <div className="order-success-head d-flex align-items-center justify-content-center mt-3">
      <h1 className="text-uppercase w-100 text-center">Vítej v rodine cinemadeck uživatelů!</h1>
      <h2 className="text-uppercase w-100 text-center">Níže si můžeš stáhnout zakoupené produkty</h2>
    </div>
    <div className="order-success-content">
      <LazyLoad height={380}>
        <img className="d-block mx-auto pb-4" src="/static/images/order-sucess.jpg" alt="" />
      </LazyLoad>
      <button type="button" className="text-uppercase d-block mt-4 mb-4 mx-auto">Stáhnout</button>
      <p className="text-center my-5">
        V produktu GUIDE najdeš svůj kód do soukromé Facebook skupiny, ve které najdeš
        <br />
        ostatní uživatelé CinemaDeck. Můžeš tady sdílet svou práci a dostávat další rady a tipy.
        <br />
        Společně se tak učíme a zdokonalujeme své výsledky.
      </p>
    </div>
    <DynamicFooter />
    <style jsx>{styles}</style>
  </Layout>
));

export default OrderSuccess;
