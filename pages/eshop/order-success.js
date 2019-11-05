import React from 'react';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
import { compose, graphql } from 'react-apollo';
import { Container } from 'reactstrap';
import { /* getLocaleQuery, */ getProductsFromCart } from '../../app-data/graphql/query';
import Layout from '../../app-data/shared/components/Layout';

import styles from '../../app-data/pages/eshop/order-success/styles/order-success.style';
import locale from '../../app-data/shared/localisation/eshop/order-success';

const DynamicFooter = dynamic(import('../../app-data/shared/components/Footer'));

const OrderSuccess = compose(
  // graphql(getLocaleQuery),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
)(({ lang, cartProducts: { cart } }) => (
  <Layout
    cart={cart}
    lang={lang}
    isHome={false}
  >
    <div className="order-success">
      <Container>
        <div className="order-success-head d-flex align-items-center justify-content-center mt-3">
          <h1 className="text-uppercase w-100 text-center">{locale[lang].welcomeToFamily}</h1>
          <h2 className="text-uppercase w-100 text-center">{locale[lang].downloadFIlesBelow}</h2>
        </div>
        <div className="order-success-content">
          <LazyLoad height={380}>
            <img className="d-block mx-auto pb-4" src="/static/images/order-sucess.jpg" alt="" />
          </LazyLoad>
          <button type="button" className="text-uppercase d-block mt-4 mb-4 mx-auto">{locale[lang].downloadBtn}</button>
          <p className="text-center my-5">
            {locale[lang].descriptionText}
          </p>
        </div>
      </Container>
      <div className="position-relative">
        <DynamicFooter lang={lang} />
      </div>
    </div>
    <style jsx>{styles}</style>
  </Layout>
));

OrderSuccess.getInitialProps = async ({ query }) => ({
  lang: query.locale,
});

export default OrderSuccess;
