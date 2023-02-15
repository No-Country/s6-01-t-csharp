import {useEffect} from 'react';
import {GoogleLogin} from 'react-google-login';
import {gapi} from 'gapi-script';
import gmail from '../assets/images/gmail.png';


const LoginGmail = () => {

    let clientID = "15238711127-tuudgvbq99lq0ev46vsuuv66v8o6r5te.apps.googleusercontent.com"
  
      useEffect(()=>{
          let start = ()=> {
              gapi.auth2.init({
                  clientId: clientID,
              })
          }
  
          gapi.load("client:auth2", start)
      },[])
  
      const onSuccess = (res) => {
          console.log(res)
      }
  
      const onFailure = () => {
          alert('Algo salio mal')
      }
  
      
  
    return (
      <>
          <div>
            <GoogleLogin 
                clientId={clientID}
                render={renderProps => (
                    <button className="flex justify-start mx-auto mt-2  cursor-pointer text-white text-xs bg-red-400 hover:bg-red-300 duration-150 rounded-md w-full p-2 shadow-slate-400  shadow-md gap-4" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <div className=' bg-white rounded-full w-5 h-5 flex justify-center '><img src={gmail} className="w-3 object-contain" /></div> 
                        Iniciar sesión con Gmail
                    </button>
                  )}
                onText="Iniciar sesión con Gmail"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
            /> 
          </div>          
      </>
    )
  }
  
  export default LoginGmail;