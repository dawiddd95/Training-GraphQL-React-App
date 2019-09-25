export default `
type Agency {
   id: Int!
   name: String!
}

extend type Query {
   allAgencies: [Agency!]!
   getAgency(id: Int!): Agency
}

extend type Mutation {
   createAgency(name: String!): Agency!
   deleteAgency(id: Int!): Int!
   updateAgency(id: Int!, name: String!): [Int!]
}
`