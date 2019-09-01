import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import { createOrderMutation, initCartMutation } from '../../../app-data/graphql/mutation';
import Layout from '../../../app-data/shared/components/Layout';
import ContactInfo from './components/ContactInfo';
import CartCheckout from './components/CartCheckout';
import PaymentMethods from './components/PaymentMethods';
import Footer from './components/Footer';

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
    paymentMethod: 0,
    products: [],
    totalPriceToPay: 0,
  },
};
const ShoppingCart = compose(
  graphql(createOrderMutation, { name: 'createOrder' }),
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({
  cartProducts: { cart }, createOrder, getLocale: { lang }, mutate,
}) => {
  const [order, handleOrder] = useState(initialState.order);

  useEffect(() => {
    const checkCart = async () => {
      try {
        if (process.browser) {
          const cartStorageData = JSON.parse(window.localStorage.getItem('cart'));

          if (cartStorageData && cartStorageData.length > 0) {
            await mutate({ variables: { cart: cartStorageData } });
            handleOrder({
              ...order,
              products: cartStorageData,
              totalPriceToPay: cartStorageData.reduce((a, b) => (a + b.totalPrice), 0),
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkCart();
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const formattedCart = cart.map((item) => {
        const { __typename, ...reObject } = item;

        return reObject;
      });

      const orderData = {
        ...order,
        name: form.name.value,
        address: {
          ...order.address,
          city: form.city.value,
          state: form.state.options[form.state.selectedIndex].value,
          street: form.street.value,
          psc: form.psc.value,
        },
        email: form.email.value,
        products: formattedCart,
        totalPriceToPay: cart.reduce((a, b) => (a + b.totalPrice), 0),
      };

      console.log(orderData);

      try {
        await createOrder({
          variables: {
            order: orderData,
          },
        });
      } catch (err) {
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
    >
      <Container>
        <form
          className="needs-validation"
          onSubmit={handleSubmitForm}
          noValidate
        >
          <Row>
            <Col sm={{ size: 12, order: 1 }} md={{ size: 6, order: 1 }} lg={{ size: 6, order: 1 }}>
              <ContactInfo lang={lang} />
            </Col>
            <Col sm={{ size: 12, order: 3 }} md={{ size: 6, order: 2 }} lg={{ size: 6, order: 2 }}>
              <CartCheckout
                cart={cart}
                lang={lang}
                order={order}
                handleOrder={handleOrder}
              />
            </Col>
            {''}
            <Col sm={{ size: 12, order: 2 }} md={{ size: 6, order: 3 }} lg={{ size: 6, order: 3 }}>
              <PaymentMethods
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
              form {
                margin-top: 100px;
              }
            `
          }
        </style>
      </Container>
      <Footer />
    </Layout>
  );
});

export default ShoppingCart;
