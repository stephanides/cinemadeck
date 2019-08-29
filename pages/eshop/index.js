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
import Footer from '../../app-data/shared/components/Footer';

import locale from '../../app-data/shared/localisation/eshop';

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
          <h1 className="text-uppercase text-center mb-0 pt-4">{locale[lang].heading}</h1>
        </div>
        {''}
        <Row>
          <Col>
            <Product
              lang={lang}
              productData={{
                content: locale[lang].cardsContent,
                imageURL: '/static/images/CARD-BOX.png',
                productTitle: 'Cards',
                titleOne: locale[lang].cardsTitleOne,
                titleTwo: locale[lang].cardsTitleTwo,
                price: 37,
              }}
            />
          </Col>
          <Col>
            <Product
              lang={lang}
              productData={{
                content: locale[lang].lightLikeProContent,
                imageURL: '/static/images/LIGHT-PRO.png',
                productTitle: 'Light Like Pro',
                titleOne: locale[lang].lightLikeProTitleOne,
                titleTwo: locale[lang].lightLikeProTitleTwo,
                price: 7,
              }}
            />
          </Col>
          <Col>
            <Product
              lang={lang}
              productData={{
                content: locale[lang].soundLikeProContent,
                imageURL: '/static/images/SOUND-PRO.png',
                productTitle: 'Sound Like Pro',
                titleOne: locale[lang].soundLikeProTitleOne,
                titleTwo: locale[lang].soundLikeProTitleTwo,
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
      <Footer lang={lang} />
    </Layout>
  );
});

export default EshopPage;
