import { useEffect, useState } from "react";


const styles = {
    wrapper:"w-full min-h-[100vh] pt-[10vh]",
    form: "w-full  min-h-full mx-auto flex flex-col mt-10 py-8 items-center",
    wrapper_text:"flex flex-col w-[80%] md:w-[50%] my-3",
    input:"h-8 px-2 rounded border-2 border-alterno focus:border-primary focus:outline-none",
    bnt_pagar:"bg-primary  py-2 px-4 rounded-lg text-white text-center text-xl transition-all duration-300 ease-in-out",
    error:"text-red-600 text-sm",
    focus_error:"focus:border-red-600 focus:outline-none border-red-600",
    focus:"focus:border-primary focus:outline-none border-alterno",
    hover:"hover:bg-secondary ",
    bloqueado:"cursor-not-allowed hover:bg-opacity-60 ",
}


export const FormPago = ( { handleClick,loadingPago } ) => {

    const [numberCard, setNumberCard] = useState("");
    const [fechaCard, setFechaCard] = useState("");
    const [codigo, setCodigo] = useState("");
    const [errorCard, setErrorCard] = useState('');
    const [errorFecha, setErrorFecha] = useState("");
    const [errorCodigo, setErrorCodigo] = useState("");
    const [activaCard, setActivaCard] = useState(false);
    const [activarFecha, setActivarFecha] = useState(false);
    const [activarCodigo, setActivarCodigo] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);


// Función que deja espacio por cada 4 dígitos en el input del número de tarjeta de pago
    const inputCard = (e) => {
        let valor = e.target.value.replace(/\s/g, '');
        valor = valor.replace(/(\d{4})/g, '$1 ');

        // Eliminar espacio al final de la cadena
        if (valor.slice(-1) === ' ') {
            valor = valor.slice(0, -1);
        }
        setNumberCard(valor);
    }

// Validación del número de tarjeta
    const validarNumberCard = (e) => {
        if (numberCard.trim().length < 19) {

            setErrorCard('El número de tarjeta debe tener 16 dígitos');
            setActivaCard(false);

        } else if (!/^(\d{4}\s)*\d{4}$/.test(numberCard)) {

            setErrorCard('El número de tarjeta solo debe contener números');
            setActivaCard(false);

        } else if (!/^(?!0000)(?!.*(\d)\1{3})\d{4}(?:\s?\d{4}){3}$/.test(numberCard)) {

            setErrorCard("El número de tarjeta es incorrecto");
            setActivaCard(false);

        } else {

            setErrorCard('');
            setActivaCard(true);
        }
    }

//Validación de la fecha de tarjeta
    const validarFechaCard = () => {
        if (fechaCard.trim().length !== 5) {
            setErrorFecha('La fecha debe tener 4 dígitos');
            setActivarFecha(false);
        } else if (!/^[0-9\/]+$/.test(fechaCard)) {
            setErrorFecha('La fecha solo debe contener números');
            setActivarFecha(false);
        } else if (!/^(0[1-9]|1[0-2])\/(2[0-9]|30)$/.test(fechaCard)){
            setErrorFecha("La fecha es incorrecta");
            setActivarFecha(false);
        } else {
            setErrorFecha('');
            setActivarFecha(true);
        }
    }

//Validación del código de tarjeta
    const validarCodigoCard = () => {
        if (codigo.trim().length !== 3) {
            setErrorCodigo('El código debe tener 3 dígitos');
            setActivarCodigo(false);
        } else if (!/^\d+$/.test(codigo)) {
            setErrorCodigo('El código solo debe contener números');
            setActivarCodigo(false);
        } else if (!/^[1-9][0-9]{2}$/.test(codigo)) {
            setErrorCodigo('El código no es válido');
            setActivarCodigo(false);
        } else {
            setErrorCodigo('');
            setActivarCodigo(true);
        }
    }


    const handleSubmit = event => {
        event.preventDefault();
    }


// Activando el botón de envío del formulario
    useEffect(() => {

        const handleDOMLoaded = () => setBtnDisable(true)

        if((activaCard === false) || (activarFecha === false) || (activarCodigo === false) ) {
            window.addEventListener('DOMContentLoaded', handleDOMLoaded);
            setBtnDisable(true);
        } else {
            window.removeEventListener('DOMContentLoaded', handleDOMLoaded)
            setBtnDisable(false)
        }
        return () => window.removeEventListener('DOMContentLoaded', handleDOMLoaded);

    }, [numberCard, fechaCard, codigo, activaCard, activarFecha, activarCodigo]);



    return (<>
        
        <form 
            className={`${styles.form}`}
            onSubmit={ (e) => e.preventDefault } 
            action="">
            <h5 className='text-2xl font-medium'>Realizar pago</h5>

            <div className={`${styles.wrapper_text}`}>
                <p className="text-lg font-medium">Total: $30</p>
            </div>

            <div className={`${styles.wrapper_text}`}>
                <label className='mb-1' >Número de la tarjeta *</label>
                <input
                    className={`${styles.input} ${errorCard === "" ? styles.focus : styles.focus_error }`}
                    value={numberCard}
                    onChange={ inputCard }
                    onBlur={ validarNumberCard }
                    name="nombre" 
                    id="nombre" 
                    type="text"
                    autoComplete='off'
                    placeholder="xxxx xxxx xxxx xxxx"
                    maxLength={ 19 }
                    />
                <span className={`${styles.error}`}>
                    {errorCard !== "" ? errorCard : ""}
                </span>
            </div>

            <div className={`${styles.wrapper_text}`}>
                <label className='mb-1' >Fecha de vencimiento *</label>
                <input
                    className={`${styles.input} ${errorFecha === "" ? styles.focus : styles.focus_error }`}
                    value={fechaCard}
                    onChange={(e) => setFechaCard(e.target.value)}
                    onBlur={ validarFechaCard } 
                    name="nombre" 
                    id="nombre" 
                    type="text"
                    autoComplete='off'
                    placeholder="05/28"
                    maxLength={ 5 }/>
                <span className={`${styles.error}`}>
                    {errorFecha !== "" ? errorFecha : ""}
                </span>
            </div>

            <div className={`${styles.wrapper_text}`}>
                <label className='mb-1' >Ultimos 3 dígitos *</label>
                <input
                    className={`${styles.input} ${errorCodigo === "" ? styles.focus : styles.focus_error }`}
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    onBlur={ validarCodigoCard } 
                    name="nombre" 
                    id="nombre" 
                    type="text"
                    autoComplete='off'
                    placeholder="785"
                    maxLength={ 3 }/>
                <span className={`${styles.error}`}>
                    {errorCodigo !== "" ? errorCodigo : " "}
                </span>
            </div>

            <div className={`${styles.wrapper_text}`}>
                <button
                    className={`${styles.bnt_pagar} ${btnDisable ? styles.bloqueado : styles.hover}`}
                    disabled={ btnDisable }
                    onClick={ () => { handleClick(); loadingPago() }  }>
                    Pagar
                </button>
            </div>

        </form>

    </>)
}
