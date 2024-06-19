const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Photo {
    id: ID!
    url: String!
    createdAt: String!
  }

  type Query {
    myProfile: User!
    getAllMyUploadedPictures: [Photo!]!
  }

  type Mutation {
    createAccount(username: String!, email: String!, password: String!): String!
    uploadPicture(file: Upload!): Photo!
  }
`;

module.exports = typeDefs;
