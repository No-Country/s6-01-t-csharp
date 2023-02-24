import {Link} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import foto from '../assets/icons/Vector.png';

function RequestWalker(){
    return(
        <>
            <div className="container w-11/12 h-full flex justify-center m-auto py-20">
                <div className=" bg-back bg-cover mx-auto w-[70%] h-[37rem] rounded-md shadow-slate-600 shadow-lg" >
                    <div className="flex flex-row h-full rounded-md shadow-slate-500 p-3 ">
                        
                        <div className="p-3 mx-auto w-2/4 h-full flex flex-col justify-center">
                            <h3 className="flex flex-col text-white font-semibold text-xl -mt-4 mb-6 ">Solicitar paseador</h3>
                            <Formik>

                                {/* {({errors})=>( */}
                                        <Form>
                                <div className=" w-full">
                                        <p className="text-white my-2 font-semibold">Nombre del perro *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='Tiberius' id='name' name='name' type='text' />
                                </div>
                                <div className='my-6'>
                                    <h4 className='text-white my-3 font-semibold'>Tamaño *</h4>
                                    <fieldset className='text-white flex flex-row gap-3' >
                                        <Field  type='radio' name='typeOfDog' value='Pequeño' id='typeOfDog' /><p>Pequeño</p>
                                        <Field  type='radio' name='typeOfDog' value='Mediano' id='typeOfDog2' /><p>Mediano</p>
                                        <Field  type='radio' name='typeOfDog' value='Grande' id='typeOfDog3' /><p>Grande</p>
                                    </fieldset> 
                                    <ErrorMessage name='typeOfDog' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.typeOfDog}</div>)} />
                                </div> 
                                <div className=" w-full">
                                        <p className="text-white my-2 font-semibold">Fecha del paseo *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="12/08/2023" id='email' name='Date' type="text" />
                                </div>
                                <div className=" w-full mb-4">
                                        <p className="text-white my-2 font-semibold">Horario *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='16:50' id='pazzword' name='time' type='text' />
                                        </div>
                                </div>
                                <div className=" w-full mb-2 mt-4">
                                        <p className="text-white my-2 font-semibold">Horas *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='2 horas' id='pazzword2' name='hours' type='text' />
                                </div>
                                </div>
                                <div className='flex flex-row' >
                                    <button className="flex justify-center text-sm bg-[#a6b4b5e7] hover:bg-[#9aa8a9e7] duration-150 rounded-md w-[11rem] h-[2rem] p-1" type='submit' >
                                        <img src={foto} className=' w-[3.5rem] h-[1.3rem] mt-[0.1rem] ' />
                                    </button>
                                    <p className='text-white text-sm px-2 pt-0' >*</p>
                                </div>
                                </Form>
                                    {/* )}                             */}
                            </Formik>
                        </div>
                        <div className="text-white text-sm w-2/4 h-full rounded-md flex justify-around flex-col overflow-hidden mt-[2rem] "> 
                            <p className='p-10' >
                                Durante el paseo el paseador será 100%
                                responsable de tu mascota, cubriendo todas
                                sus necesidades. Cualquier inconveniente 
                                comunícate con nosotros a través del 
                                formulario de contacto.
                            </p>
                           <div className='mx-auto mt-auto mb-[8rem] ' >
                                <button className="flex justify-center mx-auto mt-3 text-white text-sm bg-[#01b1b15e] hover:bg-[#33baba67] duration-150 rounded-md w-[11rem] h-[2rem] p-1" >Enviar solicitud</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestWalker;