import search from '../../src/assets/images/search.svg'
import Paseador1 from "../assets/images/paseador1.png";
import Paseador2 from "../assets/images/paseador2.png";
import Paseador3 from "../assets/images/paseador3.png";
import { useState, useEffect } from 'react'
import { CardPaseador } from './CardPaseador';
import Nav from './Nav';
import Buscador from './Buscador';
import { useParams } from 'react-router';


const styles = {
    wrapper:"w-[90%] md:w-[80%] min-h-[100vh] flex flex-col items-center",
    flex: "d-flex ",
    titulo: "text-md font-medium mt-5",
    buscador: "max-w-screen-md w-3/5 max-h-24 flex content-center gap-2",
    container_paseadores:"w-[100%] md:w-[80%]",
}


export const Paseadores = () => {

    const {direccion} = useParams()
    console.log(direccion)

    const [localidad, setLocalidad] = useState("");
    const [resultados, setResultados] = useState("");

    const onClick = () => {
        console.log(localidad);
    }
    const getPaseadores = async (direccion) =>{

            try {
                const response = await fetch(`/api/Busqueda?query=${direccion}`);
                const data = await response.json();
                setResultados(data)
                console.log(data)
            } catch (error) {
                console.error(error);
            }
    }

    useEffect(() => {
        getPaseadores(direccion)
        
    }, [])
    console.log(resultados)


    return (<>
        <Nav />
        <div className='w-full flex justify-center pt-[13vh]'>
            <section className={ styles.wrapper }>
                {/* <div className={ styles.buscador }>
                    <input 
                        type='text' 
                        placeholder='localidad, barrio o cuidad' 
                        className='w-11/12 h-7 p-2 border-dark border-solid border-2 rounded placeholder:p-4 placeholder:text-sm  computer:h-16 computer:placeholder:text-lg'
                        onChange={ (e) => setLocalidad(e.target.value) }
                        value = { localidad }/>
                        
                    <button className='bg-dark w-10 rounded-md computer:w-[20%] computer:h-16 flex content-center items-center justify-center'>
                        <img 
                            src={search} 
                            alt='iconSearch' 
                            className='w-[20%] m-auto w- computer:text-sm com'
                            onClick={ onClick }
                            />
                    </button>
                </div> */}
                <div className='flex gap-1 w-full'>

                    <Buscador />
                </div>

                <h3 className={ styles.titulo } >Resultados de busqueda para: {direccion}</h3>

                <div className={ styles.container_paseadores } >
                    {resultados && resultados.walkers.map((walker)=>(
                         <CardPaseador 
                            img={ walker.avatar } 
                            preferencias={walker.preferencias[0]}
                            nombre={`${walker.nombres} ${walker.apellidos}`}
                            texto={walker.descripcion}
                            />
                    ))}
                </div>
            </section>
        </div>
        
    </>)
}
