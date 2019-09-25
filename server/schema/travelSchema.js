export default `
type Travel {
   id: Int!
   name: String! 
   days: Int! 
   type: String!
   start: String!
   agencyId: Int!
   agency: Agency!
}

extend type Query {
   allTravels: [Travel!]
   getTravel(id: Int!): Travel
}

extend type Mutation {
   createTravel(name: String!, days: Int!, type: String!, start: String!, agencyId: Int!): Travel
   updateTravel(id: Int!, name: String, days: Int, type: String, start: String, agencyId: Int): [Int!]
   deleteTravel(id: Int!): Int!
}
`