const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    favCampgrounds: [Campground]
  }

  type Campground {
    campgroundId: String
    name: String!
    description: String!
    image: String!
    latlong: String
    reservation: String
    totalSites: Int
    toilets: String
    potableWater: String
    firewood: String
  }

  input CampgroundInput {
    campgroundId: String
    description: String!
    firewood: String
    image: String!
    latlong: String
    name: String!
    potableWater: String
    reservation: String
    toilets: String
  }

  type Query {
    me: User!
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCampground(campgroundInput: CampgroundInput): User
    removeCampground(campgroundId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
