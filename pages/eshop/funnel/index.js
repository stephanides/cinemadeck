import './scss/funnel.scss';
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
      <div className="funnel">
        <Container>
          <div className="funnel-heading-container">
            <h2 className="text-uppercase text-center pt-5 pb-5 mb-5">{locale[lang].funnelTitle}</h2>
          </div>
          <Product
            lang={lang}
            data={{
              title: locale[lang].lightLikeProTitle,
              image: '/static/images/LIGHT-PRO.png',
              price: [180, 7],
              productTitle: 'Light Like Pro',
              content: locale[lang].lightLikeProContent,
              extraContent: {
                infoLine: locale[lang].lightLikeProExtraInfoLine,
                infoContent: locale[lang].lightLikeProExtraInfoContent,
              },
            }}
          />
          <Product
            lang={lang}
            data={{
              title: locale[lang].soundLikeProTitle,
              image: '/static/images/SOUND-PRO.png',
              price: [180, 7],
              productTitle: 'Sound Like Pro',
              content: locale[lang].soundLikeProContent,
            }}
          />
          <Footer lang={lang} />
        </Container>
      </div>
    </Layout>
  );
});

export default Funnel;
