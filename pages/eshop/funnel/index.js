import React from 'react';
import { Container } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import Layout from '../../../app-data/shared/components/Layout';
import Product from './components/Product';
import Footer from '../../../app-data/shared/components/eshop/Footer';

import locale from '../../../app-data/shared/localisation/eshop/funnel';

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
        <h2 className="text-uppercase pt-1 pb-5 mb-5">{locale[lang].funnelTitle}</h2>
      </div>
      <Product
        lang={lang}
        data={{
          title: locale[lang].lightLikeProTitle,
          price: 7,
          productTitle: 'Light Like Pro',
          content: locale[lang].lightLikeProContent,
        }}
      />
      <Product
        lang={lang}
        data={{
          title: locale[lang].lightLikeProTitle,
          price: 7,
          productTitle: 'Sound Like Pro',
          content: locale[lang].lightLikeProContent,
        }}
      />
      <Footer lang={lang} />
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
