const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input UserLogInput {
    email: String!
    password: String!
  }

  type User {
    _id: String!
    approved: Boolean!
    firstName: String!
    lastName: String!
    jwt: String!
    role: Int!
  }

  type Query {
    user(id: String): User
    users: [User]
  }
  type Mutation {
    loginUser(user: UserLogInput): User
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
