/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Container, Col, Row } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { /* getLocaleQuery, */ getProductsFromCart } from '../../app-data/graphql/query';
import { createOrderMutation, initCartMutation } from '../../app-data/graphql/mutation';
import Layout from '../../app-data/shared/components/Layout';
import ContactInfo from '../../app-data/pages/eshop/cart/components/ContactInfo';
import CartCheckout from '../../app-data/pages/eshop/cart/components/CartCheckout';

const DynamicPaymentMethods = dynamic(import('../../app-data/pages/eshop/cart/components/PaymentMethods'));
const DynamicFooter = dynamic(import('../../app-data/pages/eshop/cart/components/Footer'));

const initialState = {
  order: {
    address: {
      city: '',
      state: '',
      street: '',
      psc: '',
    },
    currency: 'EUR',
    email: '',
    name: '',
    note: '',
    paymentMethod: 0,
    products: [],
    totalPriceToPay: 0,
  },
  stateSelected: 0,
};
const ShoppingCart = compose(
  graphql(createOrderMutation, { name: 'createOrder' }),
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
)(({
  cartProducts: { cart }, createOrder, lang, mutate, orderDiscount,
}) => {
  const [submitted, toggleSubmitted] = useState(false);
  const [order, handleOrder] = useState(initialState.order);
  const [stateSelected, handleStateChange] = useState(initialState.stateSelected);
  const [redirectGP, handleRedirectGP] = useState(false);

  useEffect((orderDiscount) => {
    if (window.location.href.indexOf('nzf15dWvJku') > -1) {
      window.localStorage.removeItem('cart');
      // window.location.href = `https://thecinemadeck.com/${lang}/code-not-found`;
    }
    if (window.location.href.indexOf('nzf20dWvJku') > -1) {
      window.localStorage.removeItem('cart');
      // window.location.href = `https://thecinemadeck.com/${lang}/code-not-found`;
    }
    if (window.location.href.indexOf('nzf50dWvJku') > -1) {
      window.localStorage.removeItem('cart');
      // window.location.href = `https://thecinemadeck.com/${lang}/code-not-found`;
    }

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

    return () => null;
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      toggleSubmitted(true);

      const formattedCart = cart.map((item) => {
        const rPrice = lang === 'cz' ? item.price.cz : item.price.en;
        const {
          __typename,
          id,
          price,
          totalPrice,
          ...reObject
        } = item;
        const newObject = { ...reObject, price: rPrice };

        return newObject;
      });

      let orderData = {
        ...order,
        name: form.name.value,
        address: {
          ...order.address,
          city: form.city.value,
          state: form.state.options[form.state.selectedIndex].value,
          street: form.street.value,
          psc: form.psc.value,
        },
        currency: lang === 'cz' ? 'CZK' : 'EUR',
        email: form.email.value,
        lang,
        products: formattedCart,
        note: form.note.value,
        totalPriceToPay: lang === 'cz'
          ? cart.reduce((a, b) => (a + b.totalPrice.cz), 0)
          : cart.reduce((a, b) => (a + b.totalPrice.en), 0),
      };

      // console.log(orderData);

      try {
        const { data: { createOrder: orderCreated } } = await createOrder({
          variables: {
            order: orderData,
          },
        });

        orderData = {
          ...orderData,
          orderNum: orderCreated.orderNum,
        };

        // console.log(orderData);

        if (orderData.paymentMethod === 0) {
          const response = await fetch('/payment', {
            method: 'POST',
            body: JSON.stringify(orderData),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
          });

          // console.log(response);

          if (response.status === 200) {
            // console.log(200);
            const responseJSON = await response.json();

            // console.log(responseJSON);

            const { paymentResult: { gw_url /* , id */ } } = responseJSON;

            // console.log(gw_url);
            // console.log(id);

            if (gw_url) {
              handleRedirectGP(true);

              const timeToRedirect = setTimeout(() => {
                if (window) {
                  handleRedirectGP(false);
                  clearTimeout(timeToRedirect);
                  toggleSubmitted(false);
                  window.location.href = gw_url;
                }
              }, 2500);
            } else {
              // toggleSubmitted(false);
              throw new Error(response.statusText);
            }
          } else {
            // toggleSubmitted(false);
            throw new Error(response.statusText);
          }
        }
      } catch (err) {
        toggleSubmitted(false);
        console.log(err);
      }
    }

    form.classList.add('was-validated');
  };

  return (
    <Layout
      cart={cart}
      lang={lang}
      isCart
      isHome={false}
      goPayRedirect={redirectGP}
    >
      <Container>
        <form
          className="needs-validation"
          onSubmit={handleSubmitForm}
          noValidate
        >
          <Row>
            <Col sm={{ size: 12, order: 1 }} md={{ size: 6, order: 1 }} lg={{ size: 6, order: 1 }}>
              <ContactInfo
                lang={lang}
                handleStateChange={handleStateChange}
                order={order}
                handleOrder={handleOrder}
              />
            </Col>
            <Col sm={{ size: 12, order: 3 }} md={{ size: 6, order: 2 }} lg={{ size: 6, order: 2 }}>
              <CartCheckout
                cart={cart}
                lang={lang}
                stateSelected={stateSelected}
                disabled={submitted}
                orderDiscount={orderDiscount}
              />
            </Col>
            <Col sm={{ size: 12, order: 2 }} md={{ size: 6, order: 3 }} lg={{ size: 6, order: 3 }}>
              <DynamicPaymentMethods
                handleOrder={handleOrder}
                lang={lang}
                order={order}
              />
            </Col>
            <Col
              sm={{ size: 12, order: 4 }}
              md={{ size: 6, order: 4 }}
              lg={{ size: 6, order: 4 }}
            />
          </Row>
          <Row />
        </form>
        <style jsx>
          {
            `
              form { margin-top: 100px; }
            `
          }
        </style>
      </Container>
      <DynamicFooter lang={lang} />
    </Layout>
  );
});

ShoppingCart.getInitialProps = async ({ query }) => ({
  lang: query.locale,
  orderDiscount: query.orderDiscount,
});

export default ShoppingCart;
