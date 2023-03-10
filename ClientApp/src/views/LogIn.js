import eye from '../assets/images/visibilidad.png';
import noEye from '../assets/images/invisible.png';
import { Link, redirect, useNavigate } from 'react-router-dom';
import dog from '../assets/images/PerroPng.png';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import { useState, createContext} from 'react';
import LoginGmail from '../components/LoginGmail';
import LoginFacebook from '../components/LoginFacebook';
import Nav from '../components/Nav';
import RequestWalker from '../components/RequestWalker';
import Swal from 'sweetalert2';

function LogIn(){


    const contextLogin = createContext()

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

    const url = '/api/Auth/Login'
    const navigate = useNavigate();
    function handleLogin(valores){
        fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "email": valores.email,
                "password": valores.password
            })           
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('jmtToken', JSON.stringify(data.token));
            localStorage.setItem('email', JSON.stringify(valores.email))
            navigate('/#',{replace: true});
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <Nav />
            <div className="w-[100%] min-h-screen md:h-screen flex justify-center  items-center pt-20">

                    <div className="flex flex-col md:flex-row justify-center w-[100%] md:h-[550px] 2xl:h-[700px]">
                        <div className=" h-[400px] md:h-full w-[100%] md:w-[400px] lg:w-[500px] md:rounded-md shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]"> 
                            <img src={dog} className="h-full w-full object-cover md:rounded-md" />
                            <div className='flex flex-col justify-center -my-52 gap-4'>
                                <p className="text-center text-white text-xl">??Todav??a no tienes una cuenta?</p>                           
                                <a href="/Register" className="flex justify-center self-center p-2 text-white text-sm bg-fuchsia-900 hover:bg-fuchsia-800 duration-150 rounded-md w-32 h-9 cursor-pointer">Registrarse</a>
                            </div>
                        </div>
                        <div className="h-[500px] md:h-full w-[100%] md:w-[400px] lg:w-[500px] flex flex-col justify-center items-center gap-1 shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)] md:rounded-md">
                            <h3 className="flex flex-col text-center font-semibold text-xl m-2">Iniciar Sesi??n</h3>
                            <Formik
                                initialValues={{
                                    password:'',
                                    email:''
                                }}
                                validate={(valores)=>{
                                    let errores = {}

                                    if(!valores.email){
                                        errores.email = "Ingrese un correo"
                                    }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                                        errores.email = 'Correo incorrecto'
                                    }

                                    if(!valores.password){
                                        errores.password = "Contrase??a incorrecta"
                                    }
                             

                                    return errores
                                }}
                                onSubmit={(valores) => {
                                    handleLogin(valores)
                                }}
                            >
                                {({errors})=>(
                                <Form className='w-[90%]'>
                                    <div className=" w-[full]">
                                        <p className="my-3 font-semibold">Correo el??ctronico</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="correo@correo.com" id='email' name='email' type="email" />
                                        <ErrorMessage name='email' component={()=> (<div className=' text-red-500 text-xs font-semibold'>{errors.email}</div>)} />
                                    </div>
                                    <div className=" w-full mb-8">
                                        <p className="my-3 font-semibold">Contrase??a</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="********" id='password' name='password' type={password} />
                                            {watch && <div className='flex justify-end -my-6 mx-3 cursor-pointer'><img src={eye} className="w-3" onClick={()=>{visible()}}  /></div> }
                                            <div className={clas}><img src={noEye} className="w-3" onClick={()=>{noVisible()}} /></div>
                                        </div>
                                        <ErrorMessage name='password' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-9 -mb-8'>{errors.password}</div>)} />

                                    </div> 
                                    <Link to='/ForgotPassword' className=" text-blue-400 hover:text-blue-500 duration-100 underline text-xs font-semibold cursor-pointer" >Olvide mi contrase??a</Link>
                                    <button className="flex justify-center mx-auto mt-3 text-white text-sm bg-teal-500 hover:bg-teal-400 duration-150 rounded-md w-36 h-10 p-2" type='submit' >Acceder</button>
                                </Form> 
                                )}                                
                            </Formik>  
                            <div className='w-[90%]'>
                                <LoginGmail/>
                                <LoginFacebook />
                            </div>                                                                                                                                      
                            
                    </div>
                    </div>

            </div>
        </>
    )
}

export default LogIn;