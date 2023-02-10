import eye from '../assets/images/visibilidad.png';
import noEye from '../assets/images/invisible.png';
import face from '../assets/images/facebook.png';
import gmail from '../assets/images/gmail.png';
import dog from '../assets/images/PerroPng.png';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import { useState} from 'react';
import LoginGmail from '../components/LoginGmail';
import LoginFacebook from '../components/LoginFacebook';

function LogIn(){

    

    const [watch, setWatch] = useState(true)
    const [noWatch, setNoWatch] = useState(true)
    const [clas, setClas] = useState('flex justify-end -my-6 mx-3 cursor-pointer absolute invisible')
    const [password, setPassword] = useState("password")

    function visible(){
        if(watch){
            setClas('flex justify-end -my-6 mx-3 cursor-pointer visible')
            setWatch(false)
            setPassword("text")
        }else{
            setWatch(true)
            setPassword("password")
        }
    }

    function noVisible(){
        if(noWatch){
            setWatch(true)
            setClas('flex justify-end -my-6 mx-3 cursor-pointer absolute invisible')
            setPassword("password")
        }else{
            setWatch(false)
            setPassword("text")
        }
    }

    return(
        <>
            <div className="container w-11/12 h-screen flex justify-center m-auto ">
                <div className=" bg-neutral-50 m-auto w-2/3 h-5/6 rounded-md shadow-slate-600 shadow-lg" >
                    <div className="flex flex-row h-full rounded-md shadow-slate-500">
                         <div className="w-2/4 h-full rounded-md shadow-slate-600 shadow-lg overflow-hidden"> 
                            <img src={dog} className="object-contain -my-8" />
                            <div className='flex flex-col justify-center -my-52 gap-4'>
                                <p className="text-center text-white text-xl">¿Todavía no tienes una cuenta?</p>                           
                                <button className="flex justify-center self-center p-2 text-white text-sm bg-fuchsia-900 hover:bg-fuchsia-800 duration-150 rounded-md w-32 h-9 cursor-pointer">Registrarse</button>
                            </div>
                        </div>
                        <div className="p-6 m-auto w-2/4 h-full flex flex-col justify-center gap-1">
                            <h3 className="flex flex-col text-center font-semibold text-xl m-2">Iniciar Sesión</h3>
                            <Formik
                                initialValues={{
                                    pword:'',
                                    email:''
                                }}
                                validate={(valores)=>{
                                    let errores = {}

                                    if(!valores.email){
                                        errores.email = "Ingrese un correo"
                                    }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                                        errores.email = 'Correo incorrecto'
                                    }

                                    if(!valores.pword){
                                        errores.pword = "Contraseña incorrecta"
                                    }
                                    // else if(!/^.{4.20}$/.test(valores.pword)){
                                    //     errores.pword = 'La contraseña o el correo es incorrecto'
                                    // }

                                    return errores
                                }}
                                onSubmit={(valores, {resetForm}) => {
                                    resetForm()
                                    console.log(valores)
                                    console.log('formulario enviado')
                                }}
                            >
                                {({errors})=>(
                                <Form>
                                    <div className=" w-full">
                                        <p className="my-3 font-semibold">Correo eléctronico</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="correo@correo.com" id='email' name='email' type="email" />
                                        <ErrorMessage name='email' component={()=> (<div className=' text-red-500 text-xs font-semibold'>{errors.email}</div>)} />
                                    </div>
                                    <div className=" w-full mb-8">
                                        <p className="my-3 font-semibold">Contraseña</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="********" id='pword' name='pword' type={password} />
                                            {watch && <div className='flex justify-end -my-6 mx-3 cursor-pointer'><img src={eye} className="w-3" onClick={()=>{visible()}}  /></div> }
                                            <div className={clas}><img src={noEye} className="w-3" onClick={()=>{noVisible()}} /></div>
                                        </div>
                                        <ErrorMessage name='pword' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-9 -mb-8'>{errors.pword}</div>)} />

                                    </div> 
                                    <a className=" text-blue-400 hover:text-blue-500 duration-100 underline text-xs font-semibold cursor-pointer" >Olvide mi contraseña</a>
                                    <button className="flex justify-center mx-auto mt-3 text-white text-sm bg-teal-500 hover:bg-teal-400 duration-150 rounded-md w-36 h-10 p-2" type='submit' >Acceder</button>
                                </Form> 
                                )}                                
                            </Formik>                                                                                                                                        
                            <LoginGmail />
                            <LoginFacebook />
                            
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;