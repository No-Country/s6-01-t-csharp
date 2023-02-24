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
import {useState} from 'react';
import Nav from '../components/Nav';


function Register(){

    
    const [watch, setWatch] = useState(true)
    const [watch1, setWatch1] = useState(true)
    const [noWatch, setNoWatch] = useState(true)
    const [clas, setClas] = useState('flex justify-end -my-6 mx-3 cursor-pointer absolute invisible')
    const [clas1, setClas1] = useState('flex justify-end -my-6 mx-3 cursor-pointer absolute invisible')
    const [password, setPassword] = useState("password")
    const [password1, setPassword1] = useState("password")

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

    return(
        <>
            <Nav/>
            <div className="w-[100%] min-h-screen md:h-screen flex justify-center  items-center pt-20">
                <div className="flex flex-col md:flex-row justify-center w-[100%] md:h-[550px] 2xl:h-[800px]" >
                        <div className="h-[400px] md:h-full w-[100%] md:w-[400px] lg:w-[500px] md:rounded-md shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)]"> 
                            <img src={dog2} className=" h-full w-full object-cover md:rounded-md" />
                            <div className='flex flex-col justify-center -my-52 gap-4'>
                                <p className="text-center text-white text-xl">¿Ya tenes una cuenta?</p>                           
                                <Link to="/login" className="flex justify-center self-center p-2 text-white text-sm bg-fuchsia-900 hover:bg-fuchsia-800 duration-150 rounded-md w-32 h-9 cursor-pointer" >Iniciar Sesión</Link> 
                                <div className='flex flex-row justify-center gap-3' >
                                    <div className=' bg-white rounded-full w-8 h-8 flex justify-center '><img src={gmail} className="w-5 object-contain" /></div>
                                    <div className=' bg-white rounded-full w-8 h-8 flex justify-center '><img src={face} className="w-5 object-contain" /></div>
                                </div>                    
                            </div>
                        </div>
                        <div className="h-[600px] md:h-full w-[100%] md:w-[400px] lg:w-[500px] flex flex-col justify-center items-center gap-1 shadow-[5px_5px_10px_10px_rgba(0,0,0,0.25)] md:rounded-md">
                            <h3 className="flex flex-col text-center font-semibold text-xl my-6 ">Registrarse</h3>
                            <Formik
                                initialValues={{
                                    pazzword:'',
                                    pazzword2:'',
                                    email:'',
                                    name:'',
                                    typeOfUser:''
                                }}
                                validate={(valores)=>{
                                    let errores = {}

                                    if(!valores.name){
                                        errores.name = "Ingrese un nombre"
                                    }

                                    if(!valores.email){
                                        errores.email = "Ingrese un correo"
                                    }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                                        errores.email = 'Correo no valido'
                                    }
                                    

                                    if(valores.pazzword !== valores.pazzword2){
                                        errores.pazzword2 = "Las contraseñas no coinciden"
                                    }

                                    if(!valores.typeOfUser){
                                        errores.typeOfUser = "Elija el tipo de usuario"
                                    }


                                    return errores
                                }}
                                onSubmit={(valores, {resetForm}) => {
                                    resetForm()
                                    console.log(valores)
                                    console.log('formulario enviado')
                                }}
                                >
                                {({errors})=>(
                                        <Form className='w-[80%] h-full'>
                                <div className=" w-full">
                                        <p className="my-3 font-semibold">Nombre de usuario *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='AlbertoF' id='name' name='name' type='text' />
                                        <ErrorMessage name='name' component={()=> (<div className=' text-red-500 text-xs font-semibold'>{errors.name}</div>)} />
                                </div>
                                <div className=" w-full">
                                        <p className="my-3 font-semibold">Correo eléctronico *</p> 
                                        <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder="correo@correo.com" id='email' name='email' type="email" />
                                        <ErrorMessage name='email' component={()=> (<div className=' text-red-500 text-xs font-semibold'>{errors.email}</div>)} />
                                </div>
                                <div className=" w-full mb-8">
                                        <p className="my-3 font-semibold">Contraseña *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='************' id='pazzword' name='pazzword' type={password} />
                                            {watch && <div className='flex justify-end -my-6 mx-3 cursor-pointer'><img src={noEye} className="w-3" onClick={()=>{visible()}}  /></div> }
                                        <div className={clas}><img src={eye} className="w-3" onClick={()=>{noVisible()}} /></div>
                                </div>
                                </div>
                                <div className=" w-full mb-8 mt-10">
                                        <p className="my-3 font-semibold">Repetir contraseña *</p>
                                        <div>
                                            <Field className="border-2 rounded-md border-solid border-teal-600 w-full h-9 px-3" placeholder='************' id='pazzword2' name='pazzword2' type={password1} />
                                            {watch1 && <div className='flex justify-end -my-6 mx-3 cursor-pointer'><img src={noEye1} className="w-3" onClick={()=>{visible1()}}  /></div> }
                                        <div className={clas1}><img src={eye1} className="w-3" onClick={()=>{noVisible1()}} /></div>
                                        <ErrorMessage name='pazzword2' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-9 -mb-8'>{errors.pazzword2}</div>)} />
                                </div>
                                </div>
                                <div className='mt-10 mb-5'>
                                    <h4 className='my-3 font-semibold'>Tipo de usuario</h4>
                                    <fieldset className='flex flex-row gap-3' >
                                        <Field type='radio' name='typeOfUser' value='Cliente' id='typeOfUser' /><p>Cliente</p>
                                        <Field type='radio' name='typeOfUser' value='Paseador' id='typeOfUser2' /><p>Paseador</p>
                                    </fieldset> 
                                    <ErrorMessage name='typeOfUser' component={()=> (<div className=' text-red-500 text-xs font-semibold mt-1 -mb-8'>{errors.typeOfUser}</div>)} />
                                </div> 
                                <div className='w-full flex justify-center'>
                                    <button className="mx-auto text-white text-sm bg-teal-500 hover:bg-teal-400 duration-150 rounded-md w-36 h-10 p-2" type='submit' >Registrarse</button>   
                                </div>
                                </Form>
                                    )}                            
                            </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;