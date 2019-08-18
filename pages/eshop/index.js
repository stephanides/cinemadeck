// import './scss/eshop.scss';
import React, { useEffect } from 'react';
import {
  Container, Col, Row,
} from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../app-data/graphql/query';
import { initCartMutation } from '../../app-data/graphql/mutation';

import Layout from '../../app-data/shared/components/Layout';
import Product from './components/Product';
import Footer from './components/Footer';

const EshopPage = compose(
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({
  getLocale: { lang }, cartProducts: { cart }, mutate,
}) => {
  useEffect(() => {
    const checkCart = async () => {
      try {
        if (process.browser) {
          const cartStorageData = JSON.parse(window.localStorage.getItem('cart'));

          if (cartStorageData && cartStorageData.length > 0) {
            await mutate({ variables: { cart: cartStorageData } });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkCart();
  }, []);

  return (
    <Layout
      cart={cart}
      lang={lang}
      isHome={false}
    >
      <Container>
        <div className="eshop-heading-container d-flex justify-content-center">
          <h1 className="text-uppercase text-center mb-0 pt-4">Cinemadeck Shop</h1>
        </div>
        {''}
        <Row>
          <Col>
            <Product
              productData={{
                title: 'Cards',
                price: 37,
              }}
            />
          </Col>
          <Col>
            <Product
              productData={{
                title: 'Light Like Pro',
                price: 7,
              }}
            />
          </Col>
          <Col>
            <Product
              productData={{
                title: 'Sound Like Pro',
                price: 7,
              }}
            />
          </Col>
        </Row>
        <style jsx>
          {
            `
              .eshop-heading-container {
                min-height: 210px;
              }
            `
          }
        </style>
      </Container>
      <Footer />
    </Layout>
  );
});

export default EshopPage;
