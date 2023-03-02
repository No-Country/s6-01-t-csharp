import {Link, useNavigate} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import foto from '../assets/icons/Vector.png';
import vect from '../assets/icons/VectorW.png';
import { useState } from 'react';

function RequestWalker(){

    const [photo, setPhoto] = useState(null)
    const navigate = useNavigate()

    return(
        <>
            {/* <div className=" w-11/12 h-full flex justify-center m-auto py-20 sm:w-screen sm:h-screen">
                <div className=" bg-back bg-cover mx-auto w-[70%] h-[37rem] rounded-md shadow-slate-600 shadow-lg" >
                    <div className="flex flex-row h-full rounded-md shadow-slate-500 p-3 "> */}
                <div className=" w-full h-full lg:w-11/12 lg:h-full lg:flex lg:justify-center lg:m-auto lg:py-20" >
                    <div className=" bg-back bg-cover bg-leften lg:bg-center lg:mx-auto lg:w-[70%] lg:h-[37rem] lg:rounded-md lg:shadow-slate-600 lg:shadow-lg">
                        <div className="flex flex-col h-full rounded-md shadow-slate-500 p-3 lg:flex-row ">
                        {/* className="p-3 mx-auto w-2/4 h-full flex flex-col justify-center" */}
                        <div className="p-3 w-[full] h-full flex flex-col justify-center lg:mx-auto lg:w-2/4 ">
                        {/* className="flex flex-col text-white font-semibold text-xl -mt-4 mb-4 " */}
                            <h3 className="flex flex-col text-center w-full text-white font-semibold text-xl mt-10 mb-4 lg:text-start lg:text-xl lg:mt-4 lg:mb-4">Solicitar paseador</h3>
                            <Formik
                            
                            initialValues={{
                                name:'',
                                typeOfDog:'',
                                date:'',
                                timeOfDay:'',
                                hours:''
                            }}
                            validate={(valores)=>{
                                let errores = {}
                               
                                if(!valores.name){
                                    errores.name = "Ingrese un nombre"
                                }

                                if(!valores.typeOfDog){
                                    errores.typeOfDog = "Seleccione el tamaño del perro"
                                }

                                if(!valores.date){
                                    errores.date = "Seleccione el día"
                                }

                                if(!valores.timeOfDay){
                                    errores.timeOfDay = "Seleccione la hora que empiece el paseo"
                                }

                                if(!valores.hours){
                                    errores.hours = "Seleccione la cantidad de horas de paseo"
                                }

                                // if(!valores.photo){
                                //     errores.photo = "Seleccione una foto de su perro"
                                // }

                                return errores
                            }}
                            onSubmit={(valores, {resetForm}) => {
                                resetForm()
                                console.log(valores,photo)
                                navigate('/pagos')
                            }}
                            >

                                {({errors})=>(
                                        <Form>
                                <div className=" w-full">
                                        <p className="text-white my-2 font-semibold">Nombre del perro *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='Tiberius' id='name' name='name' type='text' />
                                        <div className='h-[0.3rem]'>
                                        <ErrorMessage name='name' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.name}</div>)} />
                                    </div>
                                </div>
                                <div className='my-6'>
                                    <h4 className='text-white my-3 font-semibold'>Tamaño *</h4>
                                    <fieldset className='text-white flex flex-col gap-2 lg:flex-row lg:gap-1' >
                                        <div className='flex justify-end flex-row-reverse gap-3 lg:flex-row lg:justify-start'>
                                            <Field  type='radio' name='typeOfDog' value='Pequeño' id='typeOfDog' /><p className='w-[6rem]'>Pequeño</p>
                                        </div>
                                        <div className='flex justify-end flex-row-reverse gap-3 lg:flex-row lg:justify-start'>
                                            <Field  type='radio' name='typeOfDog' value='Mediano' id='typeOfDog2' /><p className='w-[6rem]'>Mediano</p>
                                        </div>
                                        <div className='flex justify-end flex-row-reverse gap-3 lg:flex-row lg:justify-start'>
                                            <Field  type='radio' name='typeOfDog' value='Grande' id='typeOfDog3' /><p className='w-[6rem]'>Grande</p>
                                        </div>
                                    </fieldset>
                                    <div className='h-[0.3rem]'>
                                        <ErrorMessage name='typeOfDog' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.typeOfDog}</div>)} />
                                    </div>
                                </div> 
                                <div className=" w-full">
                                        <p className="text-white my-2 font-semibold">Fecha del paseo *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="12/08/2023"  max="2025-12-31" id='date' name='date' type="date" />
                                        <div className='h-[0.3rem]'>
                                        <ErrorMessage name='date' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.date}</div>)} />
                                    </div>
                                </div>
                                <div className=" w-full mb-4">
                                        <p className="text-white my-2 font-semibold">Horario *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='16:30' id='timeOfDay' name='timeOfDay' type='text' as='select'>
                                                <option value="09:00AM">09:00</option>
                                                <option value="09:30AM">09:30</option>
                                                <option value="10:00AM">10:00</option>
                                                <option value="10:30AM">10:30</option>
                                                <option value="11:00AM">11:00</option>
                                                <option value="11:30AM">11:30</option>
                                                <option value="13:00AM">13:00</option>
                                                <option value="13:30AM">13:30</option>
                                                <option value="14:30AM">14:30</option>
                                                <option value="15:00AM">15:00</option>
                                                <option value="15:30AM">15:30</option>
                                                <option value="16:00AM">16:00</option>
                                                <option value="16:30AM">16:30</option>
                                                <option value="17:00AM">17:00</option>
                                                <option value="17:30AM">17:30</option>     
                                            </Field>
                                            <div className='h-[0.3rem]'>
                                        <ErrorMessage name='timeOfDay' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.timeOfDay}</div>)} />
                                    </div>
                                        </div>
                                </div>
                                <div className=" w-full mb-4 mt-4">
                                        <p className="text-white my-2 font-semibold">Horas *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='2 horas' as='select' id='hours' name='hours' type='text' >
                                                <option value="30min">00:30h</option>
                                                <option value="1h">01:00h</option>
                                                <option value="1:30h">01:30h</option>
                                                <option value="2h">02:00h</option>
                                                <option value="2:30h">02:30h</option>
                                                <option value="3h">03:00h</option>
                                                <option value="3:30h">03:30h</option>
                                                <option value="4h">04:00h</option>
                                                <option value="4:30h">04:30h</option>

                                                </Field>
                                            <div className='h-[0.3rem]'>
                                                <ErrorMessage name='hours' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.hours}</div>)} />
                                            </div>
                                </div>
                                </div>
                                <div className='flex flex-row justify-center lg:justify-start' >
                                    <div className="flex justify-center text-sm bg-[#a6b4b5] hover:bg-[#9aa8a9e7] duration-150 rounded-md w-[11rem] h-[2rem]">
                                        <span className='flex flex-row' >                      
                                            {photo 
                                            ? 
                                            <div className='flex flex-row justify-center items-center text-white p-1 text-sm bg-[#343434] hover:bg-[#454545] duration-150 rounded-md w-[11rem] h-[2rem]'>
                                                <p  className="text-white p-1 flex justify-center text-sm" >{photo.name}</p> 
                                                <img src={vect} className=' w-[0.6rem] h-[0.6rem]' />
                                            </div>
                                            : 
                                            <img src={foto} className=' w-[3.5rem] h-[1.3rem] mt-[0.2rem]  ' />}
                                        </span>
                                        <input className='opacity-0 w-[11rem] h-[2rem] absolute' id='photo' name='photo' type='file' accept=".png, .jpg, .jpeg" onChange={(e)=>{setPhoto(e.target.files[0])}} />
                                        <div className='h-[0.3rem]'>
                                    </div>
                                    </div>
                                    <p className='text-white ml-[1rem]' >*</p>                                    
                                </div>
                                <ErrorMessage name='photo' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.photo}</div>)} />
                                <div className=' absolute mt-[8rem] ml-[3rem] sm:ml-[12rem] md:ml-[18rem] lg:ml-[23rem] lg:-mt-[10rem] xl:ml-[30rem] xl:-mt-[10rem] ' >
                                    <button className="flex justify-center mx-auto mt-3 text-white text-sm bg-[#01b1b15e] hover:bg-[#33baba67] duration-150 rounded-md w-[11rem] h-[2rem] p-1" >Enviar solicitud</button>
                                </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="text-white text-sm w-[95%] h-full rounded-md flex justify-start flex-col overflow-hidden "> 
                            <p className='p-1 pb-[8rem] lg:p-10' >
                                Durante el paseo el paseador será 100%
                                responsable de tu mascota, cubriendo todas
                                sus necesidades. Cualquier inconveniente 
                                comunícate con nosotros a través del 
                                formulario de contacto.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestWalker;