import React from 'react'
import {Form, Field, ErrorMessage} from 'formik';

const EditAgencyForm = () => {
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
         <button type='submit'>
            Edit Agency
         </button>
      </Form>
   );
}
 
export default EditAgencyForm;