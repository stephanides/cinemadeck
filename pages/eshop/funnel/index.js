import React from 'react';
import { Container } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import Layout from '../../../app-data/shared/components/Layout';
import Product from './components/Product';

const Funnel = compose(
  graphql(getLocaleQuery),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
)(({ data: { lang }, cartProducts: { cart } }) => (
  <Layout
    cart={cart}
    lang={lang}
    isHome={false}
  >
    <Container>
      <div className="funnel-heading-container">
        <h2 className="text-uppercase pt-1 pb-5 mb-5">Poslední dva kroky k dokonalému interview</h2>
      </div>
      <Product />
      <Product />
    </Container>
    <style jsx>
      {
        `
          .funnel-heading-container h2 {
            letter-spacing: .25rem;
          }
        `
      }
    </style>
  </Layout>
));

export default Funnel;
