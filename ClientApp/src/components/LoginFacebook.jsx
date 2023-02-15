import FacebookLogin from '@greatsumini/react-facebook-login';
import face from '../assets/images/facebook.png';

function LoginFacebook(){
 
const responseFacebook = (response) => {
  console.log(response);
}
    return(
        <>     
            <FacebookLogin
                    appId="571303751712973"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="flex justify-start mx-auto mt-2 cursor-pointer text-white text-xs bg-blue-500 hover:bg-blue-400 duration-150  rounded-md w-full p-2 shadow-slate-400  shadow-md gap-4">
                            <div className=' bg-white rounded-full w-5 h-5 flex justify-center '><img src={face} className="w-3 object-contain" /></div>
                            Iniciar sesión con Facebook
                        </button>
                      )}
                    textButton='Iniciar sesión con Facebook'
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} />               
        </>
    )}

export default LoginFacebook;
