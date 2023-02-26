import { useEffect, useState } from "react";
import Nav from "./Nav"

const styles = {
    wrapper:"w-full min-h-[100vh] pt-[10vh]",
    form: "w-[90%] lg:w-1/2 min-h-full mx-auto flex flex-col mt-10 py-8 items-center rounded-lg shadow-2xl bg-bgCard",
    wrapper_text:"flex flex-col w-[80%] md:w-[50%] my-3",
    input:"h-8 px-2 rounded border-2 border-alterno focus:border-primary focus:outline-none",
    bnt_pagar:"bg-primary  py-2 px-4 rounded-lg text-white text-xl hover:bg-secondary transition-all duration-300 ease-in-out",
    error:"text-red-600 text-sm",
    focus_error:"focus:border-red-600 focus:outline-none border-red-600",
    focus:"focus:border-primary focus:outline-none border-alterno",
}

export const FormPago = () => {

    const [numberCard, setNumberCard] = useState("");
    const [fechaCard, setFechaCard] = useState("");
    const [codigo, setCodigo] = useState("");
    const [errorCard, setErrorCard] = useState('');
    const [errorFecha, setErrorFecha] = useState("");
    const [errorCodigo, setErrorCodigo] = useState("");
    // const [activaCard, setActivaCard] = useState(false);


    const inputCard = (e) => {
        let valor = e.target.value.replace(/\s/g, '');
        valor = valor.replace(/(\d{4})/g, '$1 ');

        // Eliminar espacio al final de la cadena
        if (valor.slice(-1) === ' ') {
            valor = valor.slice(0, -1);
        }
        setNumberCard(valor);
    }

    const validarNumberCard = (e) => {
        if (numberCard.trim().length < 19) {
            setErrorCard('El número de tarjeta debe tener 16 dígitos');
            } else if (!/^(\d{4}\s)*\d{4}$/.test(numberCard)) {
                setErrorCard('El número de tarjeta solo debe contener números');
            } else if(!/^(?!0000)(?!.*(\d)\1{3})\d{4}(?:\s?\d{4}){3}$/.test(numberCard)){
                setErrorCard("El número de tarjeta es incorrecto");
            } else {
                setErrorCard('');
            }
    }

    const validarFechaCard = () => {
        if (fechaCard.trim().length !== 5) {
            setErrorFecha('La fecha debe tener 4 dígitos');
            } 
            else if (!/^[0-9\/]+$/.test(fechaCard)) {
                setErrorFecha('La fecha solo debe contener números');
            } else if (!/^(0[1-9]|1[0-2])\/(2[0-9]|30)$/.test(fechaCard)){
                setErrorFecha("La fecha es incorrecta");
            }
            else {
            setErrorFecha('');
            }
    }

    const validarCodigoCard = () => {
        if (codigo.trim().length !== 3) {
            setErrorCodigo('El código debe tener 3 dígitos');
            } else if (!/^\d+$/.test(codigo)) {
            setErrorCodigo('El código solo debe contener números');
            } else if (!/^[1-9][0-9]{2}$/.test(codigo)) {
                setErrorCodigo('El código no es válido');
            }else {
            setErrorCodigo('');
            }
    }

    

    return (<>
        <Nav/>
        <section className={`${styles.wrapper}`}>
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
                    <button className={`${styles.bnt_pagar}`}>
                        Pagar
                    </button>
                </div>
            </form>
        </section>
        
    </>)
}
