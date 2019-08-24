import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import { initCartMutation } from '../../../app-data/graphql/mutation';
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
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({
  cartProducts: { cart }, getLocale: { lang }, mutate,
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

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
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
        products: cart,
        totalPriceToPay: cart.reduce((a, b) => (a + b.totalPrice), 0),
      };

      console.log(orderData);
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
            <Col>
              <ContactInfo lang={lang} />
            </Col>
            <Col>
              <CartCheckout
                cart={cart}
                lang={lang}
                order={order}
                handleOrder={handleOrder}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <PaymentMethods
                handleOrder={handleOrder}
                lang={lang}
                order={order}
              />
            </Col>
            <Col />
          </Row>
        </form>
      </Container>
      <Footer />
    </Layout>
  );
});

export default ShoppingCart;
