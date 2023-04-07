const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User { 
        _id: ID! 
        username: String! 
        email: String! 
        password: String! 
        favCampgrounds: [Campground]
    } 

    type Campground { 
        campgroundId: ID! 
        name: String!
        description: String! 
        image: String! 
        latlong: String 
        reservation: String 
        statePark: String 
        state: String 
        totalSites: Int 
        amenities: [Amenities]!

    }  

    input CampgroundInput { 
        campgroundId: ID! 
        name: String!
        description: String! 
        image: String! 
        latlong: String 
        reservation: String 
        statePark: String 
        state: String 
        totalSites: Int 
        amenities: [Amenities]!

    }

    type Amenities { 
        toilets: String 
        potableWater: String 
        firewood: Boolean
    }

    type Query { 
        me: User!
    } 

    type Mutation { 
        login(email: String, password: String): Auth 
        addUser(username: String!, email: String!, password: String!): Auth 
        saveCampground()
    } 

    type Auth { 
        token: ID! 
        user: User 
    }



` 

module.exports = typeDefs;
