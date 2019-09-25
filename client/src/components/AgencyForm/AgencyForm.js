import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup' 
import {Mutation} from 'react-apollo'

import Navbar from "../Navbar/Navbar"
import AddAgencyForm from '../AddAgencyForm/AddAgencyForm'

import {CREATE_AGENCY_MUTATION} from '../../graphql/agency/mutations'
import {ALL_AGENCIES_QUERY} from '../../graphql/agency/query'

const AgencyForm = () => {
   return (  
      <div>
         <Navbar />
         <Mutation mutation={CREATE_AGENCY_MUTATION}>
            {mutation => (
               <Formik
                  component={AddAgencyForm}
                  initialValues={{
                     name: '',
                  }}
                  validationSchema={Yup.object().shape({
                     name: Yup
                        .string()
                        .required('Name is required'),
                  })}
                  onSubmit={values => {
                     mutation({
                        variables: values,
                        update: (store, {data: {allAgencies} }) => {
                           const data = store.readQuery({query: ALL_AGENCIES_QUERY})
                           data.allAgencies.push(values)
                           store.writeQuery({
                              query: ALL_AGENCIES_QUERY,
                              data
                           })
                        }
                     })
                  }}
               />
            )}   
         </Mutation>
      </div>
   );
}
 
export default AgencyForm;