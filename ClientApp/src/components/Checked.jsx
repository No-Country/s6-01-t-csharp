import { useState } from "react";
import { Link } from "react-router-dom";
import check from "../assets/icons/VectorCheck.png";



const styles = {
    btn:"bg-primary  py-2 px-4 rounded-lg text-white text-center text-xl transition-all duration-300 ease-in-out",
    hover:"hover:bg-secondary ",
}




export const Checked = ( { titulo, texto, handleClick, linkHome }) => {

    const [ validaLink, setValidaLink ] = useState(linkHome);

    return (<>
        <div className="h-full w-full flex justify-evenly flex-col items-center  ">
            <p className="text-2xl font-medium uppercase">¡{ titulo }!</p>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-primary rounded-full flex justify-center items-center">
                <img 
                    className=" w-[50%]" 
                    src= { check }
                    alt="Spinner" />
            </div>
            <p className="text-base lg:text-lg  font-medium max-w-[70%] mx-auto text-center">
                { texto }
            </p>

            <>
                {
                    validaLink ?
                    <Link
                        className={`${styles.btn} ${styles.hover}`}
                        to="/">
                        Ir al inicio
                    </Link> :

                    <button
                        className={`${styles.btn} ${styles.hover}`}
                        onClick={ handleClick }>
                        Continuar
                    </button>
                }
            </>
        </div>
    </>)
}
