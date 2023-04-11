import { gql } from '@apollo/client'; 

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
  mutation addUser($username: String! $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`; 

export const SAVE_CAMPGROUND = gql `
    mutation saveCampground($campground: CampgroundInput) { 
        saveCampground(campground: $campground) { 
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
    }

` 

export const REMOVE_CAMPGROUND = gql `
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
                state
                statePark
                toilets
                totalSites
            }
    }
    }

`
