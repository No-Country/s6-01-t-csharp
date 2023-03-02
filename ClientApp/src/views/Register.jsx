import eye from '../assets/images/visibilidad.png';
import noEye from '../assets/images/invisible.png';
import {Link} from 'react-router-dom';
import dog2 from '../assets/images/Rectangle-35.png';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import LoginGmail from '../components/LoginGmail';
import LoginFacebook from '../components/LoginFacebook';
import gmail from '../assets/images/gmail.png';
import face from '../assets/images/facebook.png';
import eye1 from '../assets/images/visibilidad.png';
import noEye1 from '../assets/images/invisible.png';
import {useEffect, useState} from 'react';
import Nav from '../components/Nav';
import Swal from 'sweetalert2'


function Register(){

    
    const [watch, setWatch] = useState(true)
    const [watch1, setWatch1] = useState(true)
    const [noWatch, setNoWatch] = useState(true)
    const [clas, setClas] = useState('flex justify-end -my-6 mx-3 cursor-pointer absolute invisible')
    const [clas1, setClas1] = useState('flex justify-end -my-6 mx-3 cursor-pointer absolute invisible')
    const [password, setPassword] = useState("password")
    const [password1, setPassword1] = useState("password")
    const Swal = require('sweetalert2')

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

    
    function visible1(){
        if(watch1){
            setClas1('flex justify-end -my-6 mx-3 cursor-pointer visible')
            setWatch1(false)
            setPassword1("text")
        }else{
            setWatch1(true)
            setPassword1("password")
        }
    }

    function noVisible1(){
        if(noWatch){
            setWatch1(true)
            setClas1('flex justify-end -my-6 mx-3 cursor-pointer absolute invisible')
            setPassword1("password")
        }else{
            setWatch1(false)
            setPassword1("text")
        }
    }
    

   

        const handleRegistre = async (valores) => {
            const url = '/api/Auth/Register'
      
            try {
              const res = await fetch(url, {
                method:'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                                "email": valores.email,
                                "username": valores.username,
                                "password": valores.password,
                                "confirmPassword": valores.confirmPassword
                            })
              })
              const result = await res
              if(result.status === 200){
                Swal.fire(
                    'Ya estas registrad@!',
                    'Ve a iniciar Sesión',
                    'success'
                  )
              }else{
                Swal.fire(
                    'Hubo un error!',
                    'Intentalo de nuevo',
                    'warning'
                  )
              }
            } catch (error) {
                Swal.fire(
                    'Hubo un error!',
                    'Intentalo de nuevo',
                    'error'
                  )
            }
          }


    return(
        <>
            <Nav/>
            <div className="container w-11/12 h-full flex justify-center m-auto py-20">
                <div className=" bg-neutral-50 mx-auto w-[70%] h-[40rem] rounded-md shadow-slate-600 shadow-lg" >
                    <div className="flex flex-row h-full rounded-md shadow-slate-500">
                         <div className="w-2/4 h-full rounded-md shadow-slate-600 shadow-lg overflow-hidden"> 
                            <img src={dog2} className=" w-full h-full object-cover " />
                            <div className='flex flex-col justify-center -my-52 gap-4'>
                                <p className="text-center text-white text-xl">¿Ya tenes una cuenta?</p>                           
                                <Link to="/login" className="flex justify-center self-center p-2 text-white text-sm bg-fuchsia-900 hover:bg-fuchsia-800 duration-150 rounded-md w-32 h-9 cursor-pointer" >Iniciar Sesión</Link> 
                                <div className='flex flex-row justify-center gap-3' >
                                    <div className=' bg-white rounded-full w-8 h-8 flex justify-center '><img src={gmail} className="w-5 object-contain" /></div>
                                    <div className=' bg-white rounded-full w-8 h-8 flex justify-center '><img src={face} className="w-5 object-contain" /></div>
                                </div>                    
                            </div>
                        </div>
                        <div className="p-3 mx-auto w-2/4 h-full flex flex-col justify-center gap-1">
                            <h3 className="flex flex-col text-center font-semibold text-xl -mt-4 mb-6 ">Registrarse</h3>
                            <Formik
                                initialValues={{
                                    password:'',
                                    confirmPassword:'',
                                    email:'',
                                    username:''
                                }}
                                validate={(valores)=>{
                                    let errores = {}


                                    if(!valores.username){
                                        errores.username = "Ingrese un nombre"
                                    }

                                    if(!valores.email){
                                        errores.email = "Ingrese un correo"
                                    }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                                        errores.email = 'Correo no valido'
                                    }
                                    
                                    if(!valores.password){
                                        errores.password = 'Ingrese una contraseña'
                                    }else if(valores.password.length < 6){
                                        errores.password = 'La contraseña al menos debe tener 6 carácteres, una mayúscula, una minúscula, un numero y un carácter especial'
                                    }
                                  
                            
                                    if(valores.password !== valores.confirmPassword){
                                        errores.confirmPassword = "Las contraseñas no coinciden"
                                    }

                                    // if(!valores.typeOfUser){
                                    //     errores.typeOfUser = "Elija el tipo de usuario"
                                    // }


                                    return errores
                                }}
                                onSubmit={(valores, {resetForm}) => {                                   

                                    resetForm()
                                    handleRegistre(valores)
                                    
                                }}
                                >
                                {({errors})=>(
                                        <Form>
                                <div className=" w-full">
                                        <p className="my-3 font-semibold">Nombre de usuario *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='AlbertoF' id='username' name='username' type='text' />
                                        <ErrorMessage name='username' component={()=> (<div className=' text-red-500 text-xs font-semibold'>{errors.username}</div>)} />
                                </div>
                                <div className=" w-full">
                                        <p className="my-3 font-semibold">Correo eléctronico *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="correo@correo.com" id='email' name='email' type="email" />
                                        <ErrorMessage name='email' component={()=> (<div className=' text-red-500 text-xs font-semibold'>{errors.email}</div>)} />
                                </div>
                                <div className=" w-full mb-8">
                                        <p className="my-3 font-semibold">Contraseña *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='************' id='password' name='password' type={password} />
                                            {watch && <div className='flex justify-end -my-6 mx-3 cursor-pointer'><img src={noEye} className="w-3" onClick={()=>{visible()}}  /></div> }
                                        <div className={clas}><img src={eye} className="w-3" onClick={()=>{noVisible()}} /></div>
                                        <ErrorMessage name='password' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-9 -mb-8'>{errors.password}</div>)} />
                                </div>
                                </div>
                                <div className=" w-full mb-8 mt-10">
                                        <p className="my-3 font-semibold">Repetir contraseña *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='************' id='confirmPassword' name='confirmPassword' type={password1} />
                                            {watch1 && <div className='flex justify-end -my-6 mx-3 cursor-pointer'><img src={noEye1} className="w-3" onClick={()=>{visible1()}}  /></div> }
                                        <div className={clas1}><img src={eye1} className="w-3" onClick={()=>{noVisible1()}} /></div>
                                        <ErrorMessage name='confirmPassword' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-9 -mb-8'>{errors.confirmPassword}</div>)} />
                                </div>
                                </div>
                                <button className="flex justify-center mx-auto mt-[4rem] text-white text-sm bg-teal-500 hover:bg-teal-400 duration-150 rounded-md w-36 h-10 p-2" type='submit' >Registrarse</button>   
                                </Form>
                                    )}                            
                            </Formik>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;