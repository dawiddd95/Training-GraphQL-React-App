import React from 'react'
import {Query} from 'react-apollo'

import Navbar from '../Navbar/Navbar'
import {GET_TRAVEL_QUERY} from '../../graphql/travel/query'

const TravelDetails = ({match}) => {
   return (  
      <div>
         <Navbar />
         {/* variables={{id: match.params.id}}  nie dizala bo match.params.id ma typ string*/}
         <Query query={GET_TRAVEL_QUERY} variables={{id: parseInt(match.params.id)}} >
            {({loading, error, data}) => {
               if(loading) return <div>Loading ...</div>
               if(error) return <div>Something goes wrong! :(</div>

               // Poniewaz data.getTravel jest obiektem o tych polach 
               const {id, name, days, start, type, agencyId, agency} = data.getTravel

               return(
                  <div key={id}>
                     {/* W takich sytuacjach powinien byc zwracany nowy komponent w którym byłaby ta struktura divow*/}
                     {/* Nie moze byc mapowanie po data.getTravel poniewaz getTravel jest juz obiektem nie tablica */}
                     <div>{id}. {name}</div>
                     <div>---> days: {days}</div>
                     <div>---> start: {start}</div>
                     <div>---> type: {type}</div>
                     <div>---> agencyId: {agencyId}</div>
                     <div>---> agency: </div>
                     <div>-------------> {agency.id}</div>
                     <div>-------------> {agency.name}</div>
                  </div>
               )}
            }
         </Query>
      </div>
   );
}
 
export default TravelDetails;