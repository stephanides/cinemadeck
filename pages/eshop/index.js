import './scss/eshop.scss';
import React from 'react';
import {
  Button, Col, Row,
} from 'reactstrap';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import CustomContainer from '../../app-data/shared/components/CustomContainer';
import Product from './components/Product';

const EshopPage = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
    lang={lang}
    isHome={false}
  >
    <CustomContainer>
      <h1 className="text-uppercase text-center">Cinemadeck Shop</h1>
      <Row>
        <Col>
          <Product />
        </Col>
        <Col>
          <Product />
        </Col>
        <Col>
          <Product />
        </Col>
      </Row>
    </CustomContainer>
  </Layout>
));

export default EshopPage;
