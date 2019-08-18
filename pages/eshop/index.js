// import './scss/eshop.scss';
import React from 'react';
import {
  Container, Col, Row,
} from 'reactstrap';
import { graphql } from 'react-apollo';
import { getLocaleQuery } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Product from './components/Product';
import Footer from './components/Footer';

const EshopPage = graphql(
  getLocaleQuery, { name: 'getLocale' },
)(({ getLocale: { lang } }) => (
  <Layout
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
));

export default EshopPage;
