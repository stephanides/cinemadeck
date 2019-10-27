import gql from 'graphql-tag';

export default gql`
  extend type CartProduct {
    id: String!
    count: Int!
    discount: Boolean
    price: Price!
    title: String!
    totalPrice: Price!
  }
  extend type Product {
    id: String!
    discount: Boolean
    price: Price!
    title: String!
    totalPrice: Price!
  }
  extend type Price {
    cz: Float!
    en: Float!
  }
  extend type Query {
    lang: String!
    cart: [CartProduct]!
    products: [Product]!
  }
  extend type Mutation {
    toggleLang(lang: String!): String
    addProductToCart(id: String!): [Product]
    initCart(cart: [Object]!): [Product]
    removeProductFromCart(title: String!): [Product]
  }
`;
