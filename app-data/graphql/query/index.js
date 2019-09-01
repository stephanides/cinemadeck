/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const getLocaleQuery = gql`
  query {
    lang @client
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
      paymentMethod
      products {
        count
        price
        title
        totalPrice
      }
      totalPriceToPay
    }
  }
`;

export const getProductsFromCart = gql`
  query {
    cart @client {
      count @client
      price @client
      title @client
      totalPrice @client
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
