import { gql } from "@apollo/client";

// export const GET_ME = gql`
//   query me {
//     _id
//     username
//     email
//     favCampgrounds {
//       campgroundId
//       description
//       firewood
//       image
//       latlong
//       name
//       potableWater
//       reservation
//       state
//       statePark
//       toilets
//       totalSites
//     }
//   }
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
      }
    }
  }
`;
