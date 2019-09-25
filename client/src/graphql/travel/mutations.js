import gql from 'graphql-tag'

export const ADD_TRAVEL_MUTATION = gql`
   mutation AddMutation($name: String!, $days: Int!, $type: String!, $start: String!, $agencyId: Int!) {
      createTravel(name: $name, days: $days, type: $type, start: $start, agencyId: $agencyId) {
         id
         name
         days
         type
         start
         agencyId
      }
   }
`

// Mutacja działa dobrze
export const DELETE_TRAVEL_MUTATION = gql`
   mutation DeleteTravelMutation($id: Int!) {
      deleteTravel(id: $id)
   }
`

export const UPDATE_TRAVEL_MUTATION = gql`
   mutation UpdateTravelMutation(
      $id: Int!, $name: String!, $days: Int!, $type: String!, $start: String!, $agencyId: Int!
   ) {
      updateTravel(id: $id, name: $name, days: $days, type: $type, start: $start, agencyId: $agencyId) 
   }
`