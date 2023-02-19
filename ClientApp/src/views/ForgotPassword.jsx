import { Link } from "react-router-dom";

function ForgotPassword(){

    return(
        <>
            <div className="container w-11/12 h-screen flex justify-center m-auto" >
                <div className="w-[90%] m-auto shadow-lg shadow-gray-700 md:w-3/5 h-2/5 rounded-lg border border-solid border-gray-200" >
                    <h3 className=" font-semibold text-xl m-3 " >Recuperar contraseña</h3>
                    <hr />
                    <p className="m-5" >Ingresa tu correo electrónico o nombre de usuario para recuperar tu cuenta</p>
                    <form className="m-5" >
                        <input className="rounded-lg w-[100%] md:w-3/4 border-2 border-solid border-teal-600 h-9 px-3" type='text' name="user" id="user" placeholder="Correro electrónico o nombre de usuario" />
                        <div className="flex justify-end m-5 gap-3">
                            <Link to='/login' type="cancel" className=" bg-gray-400 text-white rounded-lg w-36 h-10 text-center p-2" >Cancelar</Link>
                            <button type="submit" className=" bg-teal-400 text-white rounded-lg w-36 h-10 " >Enviar</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;