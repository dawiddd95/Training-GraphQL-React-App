import gql from 'graphql-tag'

// moze wywalic error jesli agencyId nie odpowiada zadnemu z bazy danych np: agencyId: 123
export const ALL_TRAVELS_QUERY = gql`
   {
      allTravels {
         id
         name
         days
         start
         type
         agencyId
         agency {
            id
            name
         }
      }
   }
`

export const GET_TRAVEL_QUERY = gql`
   query GetTravel($id: Int!) {
      getTravel(id: $id) {
         id
         name
         days
         start
         type
         agencyId
         agency {
            id
            name
         }
      }
   }
`