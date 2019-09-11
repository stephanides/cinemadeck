import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Col, Row } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../app-data/graphql/query';
import { initCartMutation } from '../../app-data/graphql/mutation';
import Layout from '../../app-data/shared/components/Layout';

import styles from './styles/eshop.style';
import locale from '../../app-data/shared/localisation/eshop';

const DynamicProduct = dynamic(import('./components/Product'));
const DynamicFooter = dynamic(import('../../app-data/shared/components/eshop/Footer'));

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
        <div className="eshop-heading-container d-flex align-items-center justify-content-center mt-5 mb-5">
          <h1 className="text-uppercase text-center mb-0 pt-4">{locale[lang].heading}</h1>
        </div>
        {''}
        <Row>
          <Col md="12" lg="4">
            <DynamicProduct
              lang={lang}
              productData={{
                content: locale[lang].cardsContent,
                imageURL: '/static/images/CARD-BOX.png',
                productTitle: 'Cards',
                titleOne: locale[lang].cardsTitleOne,
                titleTwo: locale[lang].cardsTitleTwo,
                price: [950, 37],
                knowMoreUrl: '/',
              }}
            />
          </Col>
          <Col md="12" lg="4">
            <DynamicProduct
              lang={lang}
              productData={{
                content: locale[lang].lightLikeProContent,
                imageURL: '/static/images/LIGHT-PRO.png',
                productTitle: 'Light Like Pro',
                titleOne: locale[lang].lightLikeProTitleOne,
                titleTwo: locale[lang].lightLikeProTitleTwo,
                price: [180, 7],
                knowMoreUrl: '/eshop/funnel',
              }}
            />
          </Col>
          <Col md="12" lg="4">
            <DynamicProduct
              lang={lang}
              productData={{
                content: locale[lang].soundLikeProContent,
                imageURL: '/static/images/SOUND-PRO.png',
                productTitle: 'Sound Like Pro',
                titleOne: locale[lang].soundLikeProTitleOne,
                titleTwo: locale[lang].soundLikeProTitleTwo,
                price: [180, 7],
                knowMoreUrl: '/eshop/funnel',
              }}
            />
          </Col>
        </Row>
        <style jsx>{styles}</style>
      </Container>
      <DynamicFooter lang={lang} />
    </Layout>
  );
});

export default EshopPage;
