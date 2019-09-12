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
        title
      }
      totalPriceToPay
    }
  }
`;

export const addProductToCartMutation = gql`
  mutation addProductToCart($id: String!) {
    addProductToCart(id: $id) @client {
      id @client
      count @client
      price @client {
        cz
        en
      }
      title @client
      totalPrice @client {
        cz
        en
      }
    }
  }
`;

export const initCartMutation = gql`
  mutation initCart($cart: [Object]!) {
    initCart(cart: $cart) @client {
      id @client
      count @client
      price @client {
        cz
        en
      }
      title @client
      totalPrice @client {
        cz
        en
      }
    }
  }
`;

export const removeProductFromCartMutation = gql`
  mutation removeProductFromCart($id: String!) {
    removeProductFromCart(id: $id) @client {
      id @client
      count @client
      price @client {
        cz
        en
      }
      title @client
      totalPrice @client {
        cz
        en
      }
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
