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
    lang: String!
    name: String!
    note: String
    paymentMethod: Int!
    products: [OrderedProductInput]!
    totalPriceToPay: Float!
  }

  input OrdersInput {
    offset: Int
    limit: Int
  }

  input OrderedProductInput {
    count: Int!
    price: Float!
    title: String!
  }

  input OrderUpdateInput {
    orderNum: String
    orderStatus: String
    paymentMethod: Int
  }

  input UserLogInput {
    email: String!
    password: String!
  }

  input UserRegInput {
    firstName: String!
    lastName: String!
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
    orderStatus: String!
    paymentMethod: Int!
    orderNum: String!
    orderUid: String!
    products: [OrderedProduct]!
    totalPriceToPay: Float!
    userNotified: Boolean
  }

  type OrderList {
    items: [Order]!
    itemsCount: Int!
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
    order(orderNum: String): Order
    orders(ordersQuery: OrdersInput): OrderList
    user(id: String): User
    users: [User]
  }

  type Mutation {
    createOrder(order: OrderInput): Order
    updateOrder(orderUpdate: OrderUpdateInput): Order
    loginUser(user: UserLogInput): User
    registerUser(user: UserRegInput): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
