import React from 'react'
import {Form, Field, ErrorMessage} from 'formik';

const AddTravelForm = ({handleOnInput}) => (
   <Form>
      <div>
         <Field 
            name='name' 
            type='text' 
            placeholder='Name' 
            onInput={handleOnInput}
         />
         <ErrorMessage 
            name='name' 
            component='div' 
         />
      </div>
      <div>
         <Field 
            name='days' 
            type='number' 
            placeholder='Days' 
            onInput={handleOnInput}
         />
         <ErrorMessage 
            name='days' 
            component='div' 
         />
      </div>
      <div>
         <Field 
            name='start' 
            type='text' 
            placeholder='Start' 
            onInput={handleOnInput}
         />
         <ErrorMessage 
            name='start' 
            component='div' 
         />
      </div>
      <div>
         <Field 
            name='agencyId' 
            type='number' 
            placeholder='Agency ID' 
            onInput={handleOnInput}
         />
         <ErrorMessage 
            name='agencyId' 
            component='div' 
         />
      </div>
      <div>
         <Field 
            name='type' 
            type='text' 
            placeholder='Type' 
            onInput={handleOnInput}
         />
         <ErrorMessage 
            name='Type' 
            component='div' 
         />
      </div>
      <button type='submit'>
         Add Travel
      </button>
   </Form>
)

export default AddTravelForm