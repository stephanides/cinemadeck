/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const toggleLangMutation = gql`
  mutation toggleLang($lang: String!) {
    toggleLang(lang: $lang) @client
  }
`;

export const addProductToCartMutation = gql`
  mutation addProductToCart($product: ProductInput!) {
    addProductToCart(product: $product) @client {
      count @client
      price @client
      title @client
      totalPrice @client
    }
  }
`;

export const removeProductFromCartMutation = gql`
  mutation removeProductFromCart($title: String!) {
    removeProductFromCart(title: $title) @client {
      count @client
      price @client
      title @client
      totalPrice @client
    }
  }
`;
