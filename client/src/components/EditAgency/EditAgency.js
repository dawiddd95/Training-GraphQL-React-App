import React from 'react'
import {Formik} from 'formik'
import {Mutation, Query} from 'react-apollo'
import * as Yup from 'yup'

import Navbar from '../Navbar/Navbar'
import EditAgencyForm from '../EditAgencyForm/EditAgencyForm'

import {UPDATE_AGENCY_MUTATION} from '../../graphql/agency/mutations'
import {ALL_AGENCIES_QUERY, GET_AGENCY_QUERY} from '../../graphql/agency/query'

const EditAgency = ({match}) => {
   return (  
      <div>
         <Navbar />
         <Query query={GET_AGENCY_QUERY} variables={{id: parseInt(match.params.id)}} >
            {({loading, error, data}) => {
               if(loading) return <div>Loading ...</div>
               if(error) return <div>Something goes wrong! :(</div>

               const {id, name} = data.getAgency

               return (
                  <Mutation mutation={UPDATE_AGENCY_MUTATION} refetchQueries={[{ query: ALL_AGENCIES_QUERY }]}>
                     {mutation => (
                        <Formik
                           component={EditAgencyForm}
                           initialValues={{
                              id,
                              name,
                           }}
                           validationSchema={Yup.object().shape({
                              id: Yup
                                 .number()
                                 .required(),
                              name: Yup
                                 .string()
                                 .required('Name is required'),
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
 
export default EditAgency;