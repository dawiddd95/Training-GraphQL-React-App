import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup' 
import {Mutation} from 'react-apollo'

import Navbar from '../Navbar/Navbar'
import AddTravelForm from '../AddTravelForm/AddTravelForm'

import {ADD_TRAVEL_MUTATION} from '../../graphql/travel/mutations'
import {ALL_TRAVELS_QUERY} from '../../graphql/travel/query'

const TravelsForm = () => {
   return (  
      <div>
         <Navbar />
         <Mutation mutation={ADD_TRAVEL_MUTATION} refetchQueries={[{ query: ALL_TRAVELS_QUERY }]}>
            {mutation => (
               <Formik
                  component={AddTravelForm}
                  initialValues={{
                     name: '',
                     days: '',
                     start: '',
                     agencyId: '',
                     type: '',
                  }}
                  validationSchema={Yup.object().shape({
                     name: Yup
                        .string()
                        .required('Name is required'),
                     days: Yup
                        .number()
                        .required('Surname is required'),
                     start: Yup
                        .string()
                        .required('Email is required'),
                     agencyId: Yup
                        .number()
                        .required('Password is required'),
                     type: Yup
                        .string()
                        .required('Type Travel is required'),
                  })}
                  onSubmit={values => {
                     mutation({
                        variables: values,
                        // działające update wrazie co
                        // update: (cache, {data: {createTravel} }) => {
                        //    // missing field pokazuje się dlatego, że tworzenie travelu nie uwzglednia pola agency: {} (nie podajemy go), natomiast zwracanie wszystkich traveli juz uwzglednia te pole (podajemy je), jeśli usunąć z zapytania zwracajacego wszystko pole agency:{} to jest wtedy okej
                        //    const {allTravels} = cache.readQuery({ query: ALL_TRAVELS_QUERY });
                        //    cache.writeQuery({
                        //       query: ALL_TRAVELS_QUERY,
                        //       data: { allTravels: allTravels.concat([{ ...createTravel}]) }
                        //    });
                        // }
                     })
                  }}
               />
            )}   
         </Mutation>
      </div>
   );
}
 
export default TravelsForm;