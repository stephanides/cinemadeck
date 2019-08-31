/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const getLocaleQuery = gql`
  query {
    lang @client
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
