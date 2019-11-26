/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { compose, graphql } from 'react-apollo';
import { Container } from 'reactstrap';
import { getProductsFromCart } from '../../app-data/graphql/query';
import { initCartMutation, updateOrderMutation } from '../../app-data/graphql/mutation';
import Layout from '../../app-data/shared/components/Layout';

import Failed from '../../app-data/pages/eshop/order-success/components/Failed';
import Success from '../../app-data/pages/eshop/order-success/components/Succes';

import styles from '../../app-data/pages/eshop/order-success/styles/order-success.style';

const DynamicFooter = dynamic(import('../../app-data/shared/components/Footer'));

const OrderSuccess = compose(
  // graphql(getLocaleQuery),
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(updateOrderMutation, { name: 'updateOrderMutate' }),
)(({
  lang, cartProducts: { cart }, mutate, updateOrderMutate, paymentStatus,
}) => {
  let order_number;
  let state;

  if (paymentStatus) {
    order_number = paymentStatus.order_number;
    state = paymentStatus.state;
  }

  const [productImg, handleProductImg] = useState('order-success.jpg');
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
    const setProductImages = (cartData) => {
      let img = '';

      for (let i = 0; i < cartData.length; i += 1) {
        if (img.indexOf(cartData[i].id) < 0) {
          img += cartData[i].id;
        }
      }

      return img;
    };
    const updateOrderData = async (orderNum, orderStatus) => {
      try {
        const updatedData = await updateOrderMutate({
          variables: {
            orderUpdate: { orderNum, orderStatus },
          },
        });
        console.log(updatedData);
      } catch (err) {
        console.log(err);
      }
    };

    const imgSrc = `order-success/${setProductImages(cart)}.png`;

    if (order_number) {
      checkCart();
      handleProductImg(imgSrc);
      updateOrderData(order_number, state);
    }

    return () => null;
  }, [cart]);

  return (
    <Layout
      cart={[]}
      lang={lang}
      isHome={false}
    >
      <div className="order-success">
        <Container>
          {
            state === 'PAID'
              ? (
                <Success
                  lang={lang}
                  productImg={productImg}
                  cart={cart}
                />
              ) : <Failed lang={lang} />
          }
        </Container>
        <div className="position-relative">
          <DynamicFooter lang={lang} />
        </div>
      </div>
      <style jsx global>{styles}</style>
    </Layout>
  );
});

OrderSuccess.getInitialProps = async ({ query }) => ({
  lang: query.locale,
  paymentStatus: query.paymentStatus,
});

export default OrderSuccess;
