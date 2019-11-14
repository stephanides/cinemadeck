/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Col, Row } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { /* getLocaleQuery, */ getProductsFromCart } from '../../app-data/graphql/query';
import { initCartMutation } from '../../app-data/graphql/mutation';
import Layout from '../../app-data/shared/components/Layout';

import styles from '../../app-data/pages/eshop/styles/eshop.style';
import locale from '../../app-data/shared/localisation/eshop';

const DynamicProduct = dynamic(import('../../app-data/pages/eshop/components/Product'));
const DynamicFooter = dynamic(import('../../app-data/shared/components/eshop/Footer'));

const EshopPage = compose(
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
  // graphql(getLocaleQuery, { name: 'getLocale' }),
)(({
  lang, cartProducts: { cart = [] }, mutate,
}) => {
  useEffect(() => {
    const checkCart = async () => {
      try {
        setTimeout(async () => {
          const cartStorageData = JSON.parse(window.localStorage.getItem('cart'));

          await mutate({ variables: { cart: cartStorageData } });
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    };

    checkCart();

    return () => null;
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
                id: '001',
                content: locale[lang].cardsContent,
                imageURL: '/static/images/CARD-BOX.png',
                productTitle: 'Cards',
                titleOne: locale[lang].cardsTitleOne,
                titleTwo: locale[lang].cardsTitleTwo,
                price: [947, 37],
                knowMoreUrl: `/?locale=${lang}`,
                knowMoreUrlAs: `/${lang}/home`,
              }}
            />
          </Col>
          <Col md="12" lg="4">
            <DynamicProduct
              lang={lang}
              productData={{
                id: '003',
                content: locale[lang].soundLikeProContent,
                imageURL: '/static/images/SOUND-PRO.png',
                productTitle: 'Sound Like Pro',
                titleOne: locale[lang].soundLikeProTitleOne,
                titleTwo: locale[lang].soundLikeProTitleTwo,
                price: [180, 7],
                knowMoreUrl: `/eshop/funnel?locale=${lang}`,
                knowMoreUrlAs: `/${lang}/eshop/funnel`,
              }}
            />
          </Col>
          <Col md="12" lg="4">
            <DynamicProduct
              lang={lang}
              productData={{
                id: '002',
                content: locale[lang].lightLikeProContent,
                imageURL: lang === 'cz' ? '/static/images/PRESETS.png' : '/static/images/PRESETSEN.png',
                productTitle: 'Title presets',
                titleOne: locale[lang].lightLikeProTitleOne,
                titleTwo: locale[lang].lightLikeProTitleTwo,
                price: [180, 7],
                knowMoreUrl: `/eshop/funnel?locale=${lang}`,
                knowMoreUrlAs: `/${lang}/eshop/funnel`,
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

EshopPage.getInitialProps = async ({ query }) => ({ lang: query.locale });

export default EshopPage;
