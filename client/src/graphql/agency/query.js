import gql from 'graphql-tag'

export const ALL_AGENCIES_QUERY = gql`
   {
      allAgencies {
         id
         name
      }
   }
`

export const GET_AGENCY_QUERY = gql`
   query($id: Int!) {
      getAgency(id: $id) {
         id
         name
      }
   }
`
