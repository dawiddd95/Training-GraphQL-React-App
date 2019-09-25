import React from 'react'
import { Query, Mutation } from 'react-apollo'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import {ALL_AGENCIES_QUERY} from '../../graphql/agency/query'
import {DELETE_AGENCY_MUTATION} from '../../graphql/agency/mutations'

import removeIcon from '../../assets/file.png'
import detailsIcon from '../../assets/eye.png'
import editIcon from '../../assets/edit.png'

const Agencies = () => {
   return (  
      <div>
         <Navbar />
         <Query query={ALL_AGENCIES_QUERY}>
            {({loading, error, data}) => {
               if(loading) return <div>Trwa ładowanie</div>
               if(error) return <div>Coś poszło nie tak</div>

               const toRender = data.allAgencies // podpatrzylem co zwraca zapytanie w graphql playground

               return(
                  <div>
                     {toRender.map(agency => (
                        <div key={agency.id}>
                           <Link to={`/agencies/agency/${agency.id}`}>
                              <img src={detailsIcon} alt="" style={{'width': '20px', 'height': '20px'}}/>
                           </Link>
                           <Link to={`/agencies/agency/${agency.id}/edit`}>
                              <img src={editIcon} alt="" style={{'width': '20px', 'height': '20px'}}/>
                           </Link>
                           {agency.id}. {agency.name}
                           <Mutation 
                              mutation={DELETE_AGENCY_MUTATION}
                              variables={{id: agency.id}}
                              update={(cache, {data: {deleteAgency}}) => {
                                 const { allAgencies } = cache.readQuery({ query: ALL_AGENCIES_QUERY });
                                 cache.writeQuery({
                                    query: ALL_AGENCIES_QUERY,
                                    data: { 
                                       allAgencies: allAgencies.filter(currentElement => (
                                          currentElement.id  !== agency.id
                                       )
                                    )} 
                                 })
                              }}
                           >
                              {mutation => (
                                 <img 
                                    src={removeIcon} 
                                    style={{'width': '20px', 'height': '20px'}}
                                    onClick={mutation}
                                 />
                              )}
                           </Mutation>
                        </div>
                     ))}
                  </div>
               )
            }}
         </Query>
      </div>
   );
}
 
export default Agencies;