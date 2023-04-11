import { gql } from '@apollo/client'; 

export const GET_ME = gql `
    query me {
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
            state
            statePark
            toilets
            totalSites
        }
  }
`