/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { compose, graphql } from 'react-apollo';
import { Container } from 'reactstrap';
import { getProductsFromCart, getOrderByNumQuery } from '../../app-data/graphql/query';
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
  graphql(getOrderByNumQuery, {
    name: 'getOrderByNum',
    options: ({ paymentStatus: { order_number } }) => ({
      variables: { orderNum: order_number },
    }),
  }),
  graphql(updateOrderMutation, { name: 'updateOrderMutate' }),
)(({
  lang, cartProducts: { cart }, mutate, updateOrderMutate,
  getOrderByNum: { error, loading, order }, paymentStatus,
}) => {
  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <>Loading</>;
  }

  const [productImg, handleProductImg] = useState('order-success.jpg');
  let order_number;
  let state;

  // console.log(paymentStatus);
  if (paymentStatus) {
    order_number = paymentStatus.order_number;
    state = paymentStatus.state;
  }

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
      // console.log(cartData);

      const compare = (a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      };

      cartData.sort(compare);

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

    console.log(order);
    const imgSrc = `order-success/${setProductImages(cart)}.png`;

    if (order_number) {
      checkCart();

      if (productImg === 'order-success/.png' || productImg === 'order-success.jpg') {
        handleProductImg(imgSrc);
      }

      console.log(order);
      if (order && order.orderStatus !== 'PAID') {
        updateOrderData(order_number, state);
      }
    }

    if (state === 'PAID' && (order && order.orderStatus !== 'PAID')) {
      console.log('Going to send email to customer');
    }

    return () => null;
  }, [cart]); // cart

  console.log(productImg);

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
                  paymentMethod={paymentStatus.payment_instrument}
                  orderNum={order_number}
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
