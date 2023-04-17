import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_CAMPGROUND = gql`
  mutation saveCampground($campground: CampgroundInput) {
    saveCampground(campgroundInput: $campground) {
      _id
      username
      email
      favCampgrounds {
        campgroundId
        description
        firewood
        image
        latlong
        name
        potableWater
        reservation
        toilets
        totalSites
      }
    }
  }
`;

export const REMOVE_CAMPGROUND = gql`
  mutation RemoveCampground($campgroundId: ID!) {
    removeCampground(campgroundId: $campgroundId) {
      _id
      username
      email
      favCampgrounds {
        campgroundId
        description
        firewood
        image
        latlong
        name
        potableWater
        reservation
        toilets
        totalSites
      }
    }
  } 


`; 

// export const ADD_FRIEND = gql `
//   mutation Mutation($friends: ID!) {
//     addFriend(friends: $friends) {
//       _id
//       email
//       username
//     }
//   }

// `; 

// export const ADD_TRIP = gql ` 
//   mutation Mutation($input: TripInput) {
//   addTrip(input: $input) {
//     id
//     name
//     campgrounds {
//       campgroundId
//       description
//       name
//       reservation
//     }
//   }
// }
// ` 

export const ADD_NOTE = gql ` 
 mutation Mutation($userId: ID!, $campgroundId: String!, $noteText: String!) {
  addNote(userId: $userId, campgroundId: $campgroundId, noteText: $noteText) {
    campgroundId   
  }
}
`
