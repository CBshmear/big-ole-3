import { gql } from "@apollo/client";

// export const FIND_FRIENDS = gql `
//   query Query {
//     users {
//       _id
//       email
//       username
//     }
// }
// `;


export const GET_ME = gql`
  query Query {
    me {
      _id
      email
      username
      favCampgrounds {
        description
        campgroundId
        image
        name
        potableWater
        reservation
        toilets
        firewood
        latlong 
        note {
          _id
          noteText
          createdAt
          noteAuthor
        }
      }
    }
  }
`;
