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
  const [order, handleOrder] = useState(initialState.order);
  const [stateSelected, handleStateChange] = useState(initialState.stateSelected);

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

    return () => null;
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const formattedCart = cart.map((item) => {
        const {
          __typename,
          id,
          price,
          totalPrice,
          ...reObject
        } = item;

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
        currency: lang === 'cz' ? 'CZK' : 'EUR',
        email: form.email.value,
        products: formattedCart,
        note: form.note.value,
        totalPriceToPay: lang === 'cz'
          ? cart.reduce((a, b) => (a + b.totalPrice.cz), 0)
          : cart.reduce((a, b) => (a + b.totalPrice.en), 0),
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
