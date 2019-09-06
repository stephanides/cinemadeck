import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import { initCartMutation } from '../../../app-data/graphql/mutation';
import Layout from '../../../app-data/shared/components/Layout';
import Product from './components/Product';
import Footer from '../../../app-data/shared/components/eshop/Footer';

import locale from '../../../app-data/shared/localisation/eshop/funnel';

const Funnel = compose(
  graphql(initCartMutation),
  graphql(getLocaleQuery),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
)(({ data: { lang }, cartProducts: { cart }, mutate }) => {
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
        <div className="funnel-heading-container">
          <h2 className="text-uppercase pt-1 pb-5 mb-5">{locale[lang].funnelTitle}</h2>
        </div>
        <Product
          lang={lang}
          data={{
            title: locale[lang].lightLikeProTitle,
            image: '/static/images/LIGHT-PRO.png',
            price: 7,
            productTitle: 'Light Like Pro',
            content: locale[lang].lightLikeProContent,
            extraContent: {
              infoLine: 'Jak funguje light like pro s kartama cinemadeck',
              infoContent: 'adlka;dlkas;ldka; aslkjdasldjsaljk lkasjdlkasjd lkjasdasdlkjasd ljkasdlk lkjasdlk',
            },
          }}
        />
        <Product
          lang={lang}
          data={{
            title: locale[lang].lightLikeProTitle,
            image: '/static/images/SOUND-PRO.png',
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
  );
});

export default Funnel;
