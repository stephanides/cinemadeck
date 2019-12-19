import React, { useEffect } from 'react';
import { compose, graphql } from 'react-apollo';
import { initCartMutation } from '../app-data/graphql/mutation';
import { /* getLocaleQuery, */ getProductsFromCart } from '../app-data/graphql/query';

import Layout from '../app-data/shared/components/Layout';
import CodeNotFound from '../app-data/pages/codenotfound/components/CodeNotFound';

const CodeNotFoundPage = compose(
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
      <CodeNotFound lang={lang} />
    </Layout>
  );
});

CodeNotFoundPage.getInitialProps = async ({ query }) => ({ lang: query.locale });

export default CodeNotFoundPage;
