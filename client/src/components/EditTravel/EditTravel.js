import React from 'react'
import {Formik} from 'formik'
import {Mutation, Query} from 'react-apollo'
import * as Yup from 'yup'

import Navbar from '../Navbar/Navbar'
import EditTravelForm from '../EditTravelForm/EditTravelForm'

import {UPDATE_TRAVEL_MUTATION} from '../../graphql/travel/mutations'
import {ALL_TRAVELS_QUERY, GET_TRAVEL_QUERY} from '../../graphql/travel/query'

const EditTravel = ({match}) => {
   return (  
      <div>
         <Navbar />
         <Query query={GET_TRAVEL_QUERY} variables={{id: parseInt(match.params.id)}} >
            {({loading, error, data}) => {
               if(loading) return <div>loading ...</div>
               if(error) return <div>Something goes wrong :(</div>

               const {id, name, days, type, start, agencyId} = data.getTravel

               return(
                  <Mutation mutation={UPDATE_TRAVEL_MUTATION} refetchQueries={[{ query: ALL_TRAVELS_QUERY }]}>
                     {mutation => (
                        <Formik
                           component={EditTravelForm}
                           initialValues={{
                              id,
                              name,
                              days,
                              type,
                              start,
                              agencyId
                           }}
                           validationSchema={Yup.object().shape({
                              id: Yup
                                 .number()
                                 .required(),
                              name: Yup
                                 .string()
                                 .required(),
                              days: Yup
                                 .number()
                                 .required(),
                              type: Yup
                                 .string()
                                 .required(),
                              start: Yup
                                 .string()
                                 .required(),
                              agencyId: Yup
                                 .number()
                                 .required(),
                           })}
                           onSubmit={values => {
                              mutation({
                                 variables: values,
                              })
                           }}
                        />
                     )}
                  </Mutation>
               )
            }}
         </Query>
      </div>
   );
}
 
export default EditTravel;