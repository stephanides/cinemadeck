const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # START OF INPUTS
  input AddressInput {
    city: String!
    psc: String!
    state: String!
    street: String!
  }

  input OrderInput {
    address: AddressInput!
    currency: String!
    email: String!
    name: String!
    note: String
    paymentMethod: Int!
    products: [OrderedProductInput]!
    totalPriceToPay: Float!
  }

  input OrderedProductInput {
    count: Int!
    price: Float!
    title: String!
    totalPrice: Float!
  }

  input UserLogInput {
    email: String!
    password: String!
  }

  # END OF INPUTS, START OF TYPES

  type Address {
    city: String!
    psc: String!
    state: String!
    street: String!
  }

  type Order {
    address: Address!
    currency: String!
    email: String!
    name: String!
    note: String
    paymentMethod: Int!
    orderNum: String!,
    products: [OrderedProduct]!
    totalPriceToPay: Float!
  }

  type OrderedProduct {
    count: Int!
    price: Float!
    title: String!
    totalPrice: Float!
  }

  type User {
    _id: String!
    approved: Boolean!
    firstName: String!
    lastName: String!
    jwt: String!
    role: Int!
  }

  # END OF TYPES, START OF QUERIES, MUTATIONS AND SCHEMA

  type Query {
    orders: [Order]!
    user(id: String): User!
    users: [User]!
  }

  type Mutation {
    createOrder(order: OrderInput): Order
    loginUser(user: UserLogInput): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
