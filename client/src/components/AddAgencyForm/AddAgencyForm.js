import React from 'react'
import {Form, Field, ErrorMessage} from 'formik';

const AddAgencyForm = () => {
   return (  
      <Form>
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
            Add Agency
         </button>
      </Form>
   );
}
 
export default AddAgencyForm;