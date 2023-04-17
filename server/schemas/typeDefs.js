const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    favCampgrounds: [Campground]!
    # friends: [User] 
    # trips: [Trip]
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
    note: [Note]!
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
    note: [NoteInput]
  } 

  # type Trip { 
  #   id: ID! 
  #   name: String! 
  #   # campgrounds: [Campground] 
  # }  

  type Note { 
    _id: ID 
    noteText: String! 
    noteAuthor: String!
    createdAt: String
  }

  # input TripInput { 
  #   id: ID! 
  #   name: String! 
  #   # campgrounds: [CampgroundInput] 
  # } 

  input NoteInput { 
    _id: ID 
    noteText: String 
    noteAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]
    me: User! 
    campgrounds(campgroundId: String!): Campground
    camp: [Campground]
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCampground(campgroundInput: CampgroundInput): User
    removeCampground(campgroundId: ID!): User 
    # addFriend(friends: ID!): User 
    # addTrip(input: TripInput): Trip 
    addNote(userId: ID!, campgroundId: String!, noteText: String!): Campground!
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
