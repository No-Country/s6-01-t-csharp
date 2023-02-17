import React from 'react'
import emailicon from '../assets/icons/email-icon.png'
import fbicon from '../assets/icons/fb-icon.png'
import phoneicon from '../assets/icons/phone-icon.png'
import ContactForm from './ContactForm'

const Contacto = () => {
  return (
    <div id='contacto' className='flex items-center justify-center bg-white min-h-screen'>
        <div className='w-[1272px] h-[880px] flex justify-center items-center'>
            <div className='w-[636px] h-[100%] justify-center content-center rounded-lg shadow-xl relative'>
                <img src="https://s3-alpha-sig.figma.com/img/e5bd/7713/c39e32c6ed06417a2f56b8661742782f?Expires=1676851200&Signature=UePjVDUSljTv8GPLVjFsI-4XR6hWotTP-rINhbmgAAZQTjkc3vyRGRFsCjzsLnlYhAMnW9IZ5q2jzE5jRths8LVUF1AJliKyfnk7kctCSmG7Gtx5iJSbjxiX~wpI9B~PoHHfxFnItFXqsXPHlHHOncfBlJGXbzRBu8Ki3izYfvi3kVNtntgYo7sm7ci9xdZDglIbpYgA1Jo5F2zkQLYaVN-VKF3EWweAFs01zUDCQT7i3lQ6OK0ds1web-OknJl-kvY5gnUVGAP38vGg~Tihs5pP34FYAnvSvpszzDN~XV7AgvI8z-I6ZEO5H4Zyu55gLKDAcOlr6a5D1dGf8gdYHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="background-img" className='absolute object-cover w-full h-full rounded-lg shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]'/>
                <div className='bg-[#176C6D] absolute w-full h-full opacity-80 rounded-lg'></div>
                <div className='absolute flex flex-col text-white w-[80%] h-full pt-36 pl-24'>
                    <div className='flex flex-col gap-24 text-2xl'>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={emailicon} alt="" srcset="" />
                            </div>
                            <p   p className='red'>correo@correo.com</p>
                        </div>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={phoneicon} alt="" srcset="" />
                            </div>
                            <p>+5988888888</p>
                        </div>
                        <div className='flex flex-row items-center gap-8'>
                            <div className='w-[50px] flex justify-center'>
                                <img src={fbicon} alt="" srcset="" />
                            </div>
                            <p>Leash</p>
                        </div>
                    </div>
                    <div className='w-full h-full text-sm flex justify-center items-end pb-10'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et interdum orci, vitae tincidunt augue. In bibendum fringilla risus non pulvinar. Curabitur faucibus facilisis erat. Integer molestie quis ex id veh
                        </p>
                    </div>
                </div>
                <div>

                    <p className='red'>correo@correo.com</p>
                </div>
                <div>

                    <p>+5988888888</p>
                </div>
                <div>

                    <p>Leash</p>
                </div>
            </div>
            <div className='w-[636px] h-[100%] justify-center content-center bg-white rounded-lg shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]'>
                <div className='w-full flex justify-center pt-14'>

                    <p className=' text-4xl font-medium'>Formulario de Contacto</p>
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