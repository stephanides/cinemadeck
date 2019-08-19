import React, { useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery, getProductsFromCart } from '../../../app-data/graphql/query';
import { initCartMutation } from '../../../app-data/graphql/mutation';
import Layout from '../../../app-data/shared/components/Layout';
import ContactInfo from './components/ContactInfo';
import CartCheckout from './components/CartCheckout';
import PaymentMethods from './components/PaymentMethods';
import Footer from './components/Footer';

const ShoppingCart = compose(
  graphql(initCartMutation),
  graphql(getProductsFromCart, { name: 'cartProducts' }),
  graphql(getLocaleQuery, { name: 'getLocale' }),
)(({
  cartProducts: { cart }, getLocale: { lang }, mutate,
}) => {
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

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log('FORM SUBMITTED');
  };

  return (
    <Layout
      cart={cart}
      lang={lang}
      isCart
      isHome={false}
    >
      <Container>
        <form onSubmit={handleSubmitForm}>
          <Row>
            <Col>
              <ContactInfo />
            </Col>
            <Col>
              <CartCheckout cart={cart} />
            </Col>
          </Row>
          <Row>
            <Col>
              <PaymentMethods />
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
