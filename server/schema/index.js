import travelSchema from './travelSchema'
import agencySchema from './agencySchema'

const linkSchema = `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, travelSchema, agencySchema]