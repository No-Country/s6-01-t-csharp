import React from 'react'
import emailicon from '../assets/icons/email-icon.png'
import fbicon from '../assets/icons/fb-icon.png'
import phoneicon from '../assets/icons/phone-icon.png'
import imgcontacto from '../assets/images/img-contacto.png'
import ContactForm from './ContactForm'

const Contacto = () => {
  return (
    <div id='contacto' className='flex items-center justify-center bg-white min-h-screen md:min-h-screen'>
        <div className='w-[100%] md:h-[620px] 2xl:h-[700px] flex flex-col md:flex-row justify-center items-center md:my-20'>
            <div className='w-[100%] md:w-[48%] lg:w-[550px] h-[550px] md:h-full justify-center content-center md:rounded-lg md:shadow-xl relative'>
                  <img src={imgcontacto} alt="background-img" className='absolute object-cover w-full h-full md:rounded-lg shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]'/>
                <div className='bg-[#176C6D] absolute w-full h-full opacity-80 md:rounded-lg'></div>
                <div className='absolute flex flex-col text-white w-[100%] h-full md:pt-36 justify-center items-center'>
                    <div className='flex flex-col h-[100%] gap-12 md:gap-20 text-base md:text-xl justify-center'>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={emailicon} alt="emailicon" srcSet="" className='w-[30px] h-[24px]'/>
                            </div>
                            <p className='red'>correo@correo.com</p>
                        </div>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                 <img src={phoneicon} alt="phoneicon" srcSet="" className='w-[21px] h-[33px]'/>
                            </div>
                            <p>+5988888888</p>
                        </div>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={fbicon} alt="fbicon" srcSet="" className='w-[35px] h-[35px]'/>
                            </div>
                            <p>The Walking Dog</p>
                        </div>
                    </div>
                    <div className=' h-full text-sm flex justify-center items-center md:items-end pb-10 w-[70%]'>
                        <p className='text-justify'>
                        Intentamos responder todas las consultas en un tiempo menor a las 24 horas, sin embargo por diferentes motivos este plazo se puede alargar. Si en 48 horas no obtiene respuestas por favor no dude en volver a consultar. Estamos para ayudarte.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] md:w-[48%] lg:w-[550px] h-[660px] md:h-[620px] justify-center content-center bg-white md:rounded-lg shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]'>
                <div className='w-full flex justify-center pt-8'>

                    <p className='text-3xl font-medium text-center'>Formulario de Contacto</p>
                </div>
                <div className='w-full flex justify-center pt-2'>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacto