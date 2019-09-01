/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const toggleLangMutation = gql`
  mutation toggleLang($lang: String!) {
    toggleLang(lang: $lang) @client
  }
`;

export const createOrderMutation = gql`
  mutation createOrder($order: OrderInput) {
    createOrder(order: $order) {
      address {
        city
        psc
        state
        street
      }
      currency
      email
      name
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

export const initCartMutation = gql`
  mutation initCart($cart: [Object]!) {
    initCart(cart: $cart) @client {
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

export const loginUserMutation = gql`
  mutation loginUser($user: UserLogInput) {
    loginUser(user: $user) {
      _id
      approved
      firstName
      jwt
      lastName
      role
    }
  }
`;

export const toggleModalMutation = gql`
  mutation toggleModal($modal: ModalInput!) {
    toggleModal(modal: $modal) @client {
      content
      error
      visible
    }
  }
`;
