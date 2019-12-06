/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const getLocaleQuery = gql`
  query {
    lang @client
  }
`;

export const getOrderByNumQuery = gql`
  query order($orderNum: String) {
    order(orderNum: $orderNum) {
      address {
        city
        psc
        state
        street
      }
      currency
      email
      name
      orderNum
      orderStatus
      paymentMethod
      products {
        count
        price
        title
      }
      totalPriceToPay
      userNotified
    }
  }
`;

export const getOrdersQuery = gql`
  query {
    orders {
      address {
        city
        psc
        state
        street
      }
      currency
      email
      name
      orderNum
      orderStatus
      paymentMethod
      products {
        count
        title
      }
      totalPriceToPay
    }
  }
`;

export const getProducts = gql`
  query {
    products @client {
      id @client
      price @client {
        cz @client
        en @client
      }
      title @client
    }
  }
`;

export const getProductsFromCart = gql`
  query {
    cart @client {
      id @client
      count @client
      price @client {
        cz @client
        en @client
      }
      title @client
      totalPrice @client {
        cz @client
        en @client
      }
    }
  }
`;

export const getModalQuery = gql`
  query {
    modal @client {
      content
      error
      visible
    }
  }
`;
