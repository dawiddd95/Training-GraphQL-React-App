import React from 'react'
import {Query} from 'react-apollo'

import Navbar from '../Navbar/Navbar'

import {GET_AGENCY_QUERY} from '../../graphql/agency/query'

const AgencyDetails = ({match}) => {
   return (  
      <div>
         <Navbar />
         <Query query={GET_AGENCY_QUERY} variables={{id: parseInt(match.params.id)}} >
            {({loading, error, data}) => {
               if(loading) return <div>Loading ...</div>
               if(error) return <div>Something goes wrong! :(</div>

               const {id, name} = data.getAgency

               return(
                  <div key={id}>
                     <div>---> id: {id}</div>
                     <div>---> name: {name}</div>
                  </div>
               )}
            }
         </Query>
      </div>
   );
}
 
export default AgencyDetails;