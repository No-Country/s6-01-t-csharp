import { useEffect, useState } from "react";
import { FormPago } from "../components/FormPago";
import { Spinner } from "../components/Spinner";
import { Checked } from "../components/Checked";
import  Nav  from "../components/Nav";



const styles = {
    wrapper:"w-full min-h-[100vh] pt-[10vh] flex justify-center",
    container: "w-[90%] lg:w-1/2 min-h-full mx-auto flex flex-col mt-10 py-8 items-center rounded-lg shadow-2xl bg-bgCard",
}



export const PagosContainer = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ isLoadingPago, setIsLoadingPago ] = useState(true)
    const [ activarBtn, setActivarBtn ] = useState(false);
    const [ pagoExitoso, setPagoExitoso ] = useState(false);



    const handleClick = (setEstado) => {
        setEstado(true);
    }


// Desactivando el spinner del envío del pago
    const loadingPago = () => {
        setTimeout(() => {
            setIsLoadingPago(false);
        }, 2500);
    }

// Desactivando el spinner de la solicitud del paseador
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2200);
    }, []);


    return (<>
        <Nav />

        <section className={`${styles.wrapper }`}>
            <div className={`${styles.container }`}>
                {
                    isLoading ?

                    <Spinner 
                        texto="Por favor, espere a que el paseador confirme la solicitud" 
                    /> :

                    <>
                        {
                            activarBtn ?

                            <>
                                {
                                    !pagoExitoso ?

                                    <FormPago 
                                        handleClick={ () => handleClick( setPagoExitoso ) }
                                        loadingPago= { () => loadingPago() }
                                    /> :

                                    <>
                                        {
                                            isLoadingPago ?

                                            <Spinner 
                                                texto="Por favor espere, se está cargando el pago." 
                                            /> :

                                            <Checked
                                                titulo="Pago realizado con éxito"
                                                texto="Los datos han sido confirmado y el pago ha sido realizado."
                                                handleClick={ () => handleClick( setActivarBtn ) }
                                                linkHome={ true }
                                            />
                                        }
                                    </>
                                }

                            </> :

                            <Checked
                                titulo="SOLICITUD ACEPTADA CON éXITO"
                                texto="En tu casilla de mail hay un correo con todas las indicaciones de la solicitud."
                                handleClick={ () => handleClick( setActivarBtn ) }
                                linkHome={ false }
                            />
                        }
                    </>
                }


            </div>
            
        </section>

        
    </>)
}
