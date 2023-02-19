import React from 'react'
import emailicon from '../assets/icons/email-icon.png'
import fbicon from '../assets/icons/fb-icon.png'
import phoneicon from '../assets/icons/phone-icon.png'
import ContactForm from './ContactForm'

const Contacto = () => {
  return (
    <div id='contacto' className='flex items-center justify-center bg-white min-h-screen md:h-screen'>
        <div className='w-[100%] md:h-5/6 2xl:h-[900px] flex flex-col md:flex-row justify-center items-center'>
            <div className='w-[100%] md:w-[48%] lg:w-[550px] h-[550px] md:h-full justify-center content-center md:rounded-lg md:shadow-xl relative'>
                <img src="https://s3-alpha-sig.figma.com/img/e5bd/7713/c39e32c6ed06417a2f56b8661742782f?Expires=1676851200&Signature=UePjVDUSljTv8GPLVjFsI-4XR6hWotTP-rINhbmgAAZQTjkc3vyRGRFsCjzsLnlYhAMnW9IZ5q2jzE5jRths8LVUF1AJliKyfnk7kctCSmG7Gtx5iJSbjxiX~wpI9B~PoHHfxFnItFXqsXPHlHHOncfBlJGXbzRBu8Ki3izYfvi3kVNtntgYo7sm7ci9xdZDglIbpYgA1Jo5F2zkQLYaVN-VKF3EWweAFs01zUDCQT7i3lQ6OK0ds1web-OknJl-kvY5gnUVGAP38vGg~Tihs5pP34FYAnvSvpszzDN~XV7AgvI8z-I6ZEO5H4Zyu55gLKDAcOlr6a5D1dGf8gdYHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="background-img" className='absolute object-cover w-full h-full md:rounded-lg shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]'/>
                <div className='bg-[#176C6D] absolute w-full h-full opacity-80 md:rounded-lg'></div>
                <div className='absolute flex flex-col text-white w-[100%] h-full md:pt-36 justify-center items-center'>
                    <div className='flex flex-col h-[100%] gap-12 md:gap-24 text-base md:text-2xl justify-center'>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={emailicon} alt="emailicon" srcset="" className='w-[30px] h-[24px]'/>
                            </div>
                            <p   p className='red'>correo@correo.com</p>
                        </div>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={phoneicon} alt="phoneicon" srcset="" className='w-[21px] h-[33px]'/>
                            </div>
                            <p>+5988888888</p>
                        </div>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={fbicon} alt="fbicon" srcset="" className='w-[35px] h-[35px]'/>
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
            <div className='w-[100%] md:w-[48%] lg:w-[550px] h-[756px] md:h-full justify-center content-center bg-white md:rounded-lg shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]'>
                <div className='w-full flex justify-center pt-14'>

                    <p className='text-3xl lg:text-4xl font-medium text-center'>Formulario de Contacto</p>
                </div>
                <div className='w-full flex justify-center pt-5'>
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacto