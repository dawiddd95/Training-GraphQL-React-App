import React from 'react'
import {Query, Mutation} from 'react-apollo'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import {ALL_TRAVELS_QUERY} from '../../graphql/travel/query'
import {DELETE_TRAVEL_MUTATION} from '../../graphql/travel/mutations'

import removeIcon from '../../assets/file.png'
import detailsIcon from '../../assets/eye.png'
import editIcon from '../../assets/edit.png'

const Travels = () => {
   return (  
      <div>
         <Navbar />
         <Query query={ALL_TRAVELS_QUERY}>
            { ({loading, error, data}) => {
               if(loading) return <div>Loading...</div>
               if(error) return <div>Fetch Error</div>

               const toRender = data.allTravels

               return(
                  <div>
                     {toRender.map(travel => (
                        <div key={travel.id} style={{"marginTop": "30px"}}>
                           <Link to={`/travels/travel/${travel.id}`}>
                              <img src={detailsIcon} alt="" style={{'width': '20px', 'height': '20px'}}/>
                           </Link>
                           <Link to={`/travels/travel/${travel.id}/edit`}>
                              <img src={editIcon} alt="" style={{'width': '20px', 'height': '20px'}}/>
                           </Link>
                           <Mutation 
                              mutation={DELETE_TRAVEL_MUTATION} 
                              variables={{id: travel.id}}
                              refetchQueries={[{ query: ALL_TRAVELS_QUERY }]}
                              // działające update wrazie co
                              // update={(cache, {data: {deleteTravel}}) => {
                              //    const { allTravels } = cache.readQuery({ query: ALL_TRAVELS_QUERY });
                              //    cache.writeQuery({
                              //       query: ALL_TRAVELS_QUERY,
                              //       data: { 
                              //          allTravels: allTravels.filter(currentElement => (
                              //             currentElement.id  !== travel.id
                              //          )
                              //       )} 
                              //    })
                              // }}
                           >
                              {mutation => (
                                 <img 
                                    onClick={mutation}
                                    src={removeIcon} 
                                    alt="" 
                                    style={{'width': '20px', 'height': '20px'}}
                                 />
                              )}
                           </Mutation>
                           <div>{travel.id}. {travel.name}</div>
                           <div>---> days: {travel.days}</div>
                           <div>---> start: {travel.start}</div>
                           <div>---> type: {travel.type}</div>
                           <div>---> agencyId: {travel.agencyId}</div>
                           <div>---> agency: </div>
                           <div>-------------> {travel.agency.id}</div>
                           <div>-------------> {travel.agency.name}</div>
                        </div>
                     ))}
                  </div>
               )
            }}
         </Query>
      </div>
   );
}
 
export default Travels;