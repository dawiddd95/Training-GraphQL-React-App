import React from 'react'
import {Form, Field, ErrorMessage} from 'formik';

const EditTravelForm = () => {
   return (  
      <Form>
         <div>
            <Field 
               name='id' 
               type='number' 
               placeholder='ID' 
               disabled
            />
            <ErrorMessage 
               name='id' 
               component='div' 
            />
         </div>
         <div>
            <Field 
               name='name' 
               type='text' 
               placeholder='Name' 
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
            />
            <ErrorMessage 
               name='days' 
               component='div' 
            />
         </div>
         <div>
            <Field 
               name='type' 
               type='text' 
               placeholder='type' 
            />
            <ErrorMessage 
               name='type' 
               component='div' 
            />
         </div>
         <div>
            <Field 
               name='start' 
               type='text' 
               placeholder='start' 
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
               placeholder='agencyId' 
            />
            <ErrorMessage 
               name='agencyId' 
               component='div' 
            />
         </div>
         <button type='submit'>
            Edit Travel
         </button>
      </Form>
   );
}
 
export default EditTravelForm;