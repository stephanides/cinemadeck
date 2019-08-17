import React from 'react';
import { graphql } from 'react-apollo';
import { Container } from 'reactstrap';
import { getLocaleQuery } from '../../../app-data/graphql/query';
import Layout from '../../../app-data/shared/components/Layout';

const ShoppingCart = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
    lang={lang}
    isHome={false}
  >
    <Container>
      <div>SHOPPING CART</div>
    </Container>
  </Layout>
));

export default ShoppingCart;
