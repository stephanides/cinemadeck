import React, { useEffect } from 'react';
import { compose, graphql } from 'react-apollo';
import { initCartMutation } from '../../app-data/graphql/mutation';
import { getLocaleQuery, getProductsFromCart } from '../../app-data/graphql/query';

import Layout from '../../app-data/shared/components/Layout';
import Gdpr from '../../app-data/pages/gdpr/components/Gdpr';

const OchranaUdajov = compose(
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({
  getLocale: { lang }, cartProducts: { cart = [] }, mutate,
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
      <Gdpr lang={lang} />
    </Layout>
  );
});

export default OchranaUdajov;
