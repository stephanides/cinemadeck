import gql from 'graphql-tag';

export default gql`
  extend input ProductInput {
    count: Int!
    price: Float!
    title: String!
  }
  extend type Product {
    count: Int!
    price: Float!
    title: String!
    totalPrice: Float!
  }
  extend type Query {
    lang: String!
    cart: [Product]!
  }
  extend type Mutation {
    toggleLang(lang: String!): String
    addProductToCart(product: ProductInput!): [Product]
    initCart: [Product]
    removeProductFromCart(title: String!): [Product]
  }
`;
