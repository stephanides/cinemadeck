/* eslint-disable camelcase */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { compose, graphql } from 'react-apollo';
import { Container } from 'reactstrap';
import { /* getProductsFromCart, */ getOrderByNumQuery } from '../../app-data/graphql/query';
import { /* initCartMutation, */ updateOrderMutation } from '../../app-data/graphql/mutation';
import Layout from '../../app-data/shared/components/Layout';

// import Failed from '../../app-data/pages/eshop/order-success/components/Failed';
// import Success from '../../app-data/pages/eshop/order-success/components/Succes';

import styles from '../../app-data/pages/eshop/order-success/styles/order-success.style';

const DynamicFooter = dynamic(import('../../app-data/shared/components/Footer'));

const Download = compose(
  // graphql(getLocaleQuery),
  // graphql(initCartMutation),
  // graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(getOrderByNumQuery, {
    name: 'getOrderByNum',
    options: ({ uniqUid }) => ({
      variables: { orderNum: uniqUid.split('-')[1] },
    }),
  }),
  graphql(updateOrderMutation, { name: 'updateOrderMutate' }),
)(({
  lang, getOrderByNum: { error, order }, uniqUid,
}) => {
  if (error) {
    return <>{error}</>;
  }

  console.log(uniqUid);
  console.log(order);

  // const [productImg, handleProductImg] = useState('order-success.jpg');

  return (
    <Layout
      cart={[]}
      lang={lang}
      isHome={false}
    >
      <div className="order-success">
        <Container>
          Here will be the download content.
        </Container>
        <div className="position-relative">
          <DynamicFooter lang={lang} />
        </div>
      </div>
      <style jsx global>{styles}</style>
    </Layout>
  );
});

Download.getInitialProps = async ({ query }) => ({
  lang: query.locale,
  uniqUid: query.uniqUid,
});

export default Download;
