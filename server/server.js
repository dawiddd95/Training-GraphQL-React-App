import {ApolloServer, PubSub} from 'apollo-server'
import DataLoader from 'dataloader'

import typeDefs from './schema'
import resolvers from './resolvers'
import models from './db/models'
import {batchAgencies} from './services/dataLoaders'

const pubsub = new PubSub()

const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: {
      models,
      loaders: {
         agency: new DataLoader(keys => batchAgencies(keys, models)),
      },
      pubsub
   },  
});

//w playground wpisujemy localhost:4000
server.listen().then(({ url }) => {
   console.log(`🚀  Server ready at ${url}`);
});
