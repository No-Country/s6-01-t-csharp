import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 const ContactForm = () => {

    const postData = async (data) => {
      const url = "/api/Comentarios"

      try {
        const res = await fetch(url, {
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "nombre": data.name,
            "email": data.email,
            "asunto": "string",
            "mensaje": data.consultation
          })
        })
        const result = await res
        return result
      } catch (error) {
        console.log(error)
      }
    }


   return (
     <Formik
       initialValues={{ name: '', email: '', consultation: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Deben ser 15 caracteres o menos')
           .required('Campo requerido'),
          email: Yup.string()
            .email('Email invalido')
            .required('Campo requerido'),
          consultation: Yup.string()
          .max(200, 'Deben ser 200 caracteres o menos')
          .required('Campo requerido'),
       })}
       onSubmit={(values) => {
         postData(values)
       }}
     >
       <Form className='w-[90%] flex flex-col pt-1'>
        <div>
          <label htmlFor="name" className='text-xl font-normal'>Nombre</label>
          <Field name="name" type="text" placeholder="Alan" className='w-full h-[45px] border-2 rounded-lg border-[#176C6D] placeholder-gray-600 placeholder:text-xl placeholder:font-normal pl-5 mt-4'/>
          <div className='h-[20px]'>
            <ErrorMessage name="name"/>
          </div>
        </div>

        <div>  
          <label htmlFor="email" className='text-xl pb-0 font-normal'>Correo electrónico</label>
          <Field name="email" type="email" placeholder="correo@correo.com" className='w-full h-[45px] border-2 rounded-lg border-[#176C6D] placeholder-gray-600 placeholder:text-xl placeholder:font-normal pl-5 mt-4'/>
          <div className='h-[20px]'>
            <ErrorMessage name="email" />
          </div>
        </div>

        <div>
          <label htmlFor="consultation" className='text-xl pb-0 font-normal'>Tu consulta</label>
          <Field name="consultation" as="textarea" placeholder="..." className='w-[100%] h-[180px] border-2 rounded-lg border-[#176C6D] placeholder-gray-600 placeholder:text-2xl placeholder:font-normal p-5 mt-4 text-justify'/>
          <div className='h-[15px]'>
            <ErrorMessage name="consultation" />
          </div>
        </div> 
 
         <button type="submit" className='w-[180px] h-[50px] bg-[#01B1B0] text-[#FCFBFE] rounded-lg font-normal text-lg self-end'>Enviar</button>
       </Form>
     </Formik>
   );
 };

 export default ContactForm