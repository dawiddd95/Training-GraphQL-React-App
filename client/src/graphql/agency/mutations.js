import gql from 'graphql-tag'

export const CREATE_AGENCY_MUTATION = gql`
   mutation CreateAgencyMutation($name: String!) {
      createAgency(name: $name) {
         id
         name
      }
   }
`

export const DELETE_AGENCY_MUTATION = gql`
   mutation DeleteAgencyMutation($id: Int!) {
      deleteAgency(id: $id) 
   }
`

export const UPDATE_AGENCY_MUTATION = gql`
   mutation UpdateAgencyMutation($id: Int!, $name: String!) {
      updateAgency(id: $id, name: $name)
   }
`