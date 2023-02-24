import search from '../../src/assets/images/search.svg'
import Paseador1 from "../assets/images/paseador1.png";
import Paseador2 from "../assets/images/paseador2.png";
import Paseador3 from "../assets/images/paseador3.png";
import { useState } from 'react'
import { CardPaseador } from './CardPaseador';
import Nav from './Nav';


const styles = {
    wrapper:" w-4/5 max-w-screen-2xl mx-auto min-h-[100vh] p-8 ",
    flex: "d-flex ",
    titulo: "text-xl font-medium",
    buscador: "max-w-screen-md w-3/5 max-h-24 mx-auto flex content-center gap-2",
    container_paseadores:"mx-auto w-[80%] px-10",
}


export const Paseadores = () => {

    const [localidad, setLocalidad] = useState("");

    const onClick = () => {
        console.log(localidad);
    }


    return (<>
        <Nav />
        <div className='w-full  pt-[10vh]'>
            <section className={ styles.wrapper }>
                <div className={ styles.buscador }>
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
                </div>

                <h3 className={ styles.titulo } >Resultados de busqueda</h3>

                <div className={ styles.container_paseadores } >
                    <CardPaseador 
                        img={ Paseador1 } 
                        preferencias="Perros pequeños"
                        nombre="José Perdomo"
                        texto="Soy un hombre de 34 años que disfruta de las actividades al aire libre
                        es por motivo(sumando el hecho que me gustan los animales) que decidí..."
                        />
                    <CardPaseador 
                        img={ Paseador2 } 
                        preferencias="Perros medianos"
                        nombre="Andrés Pérez"
                        texto="Me gusta pasear perros, generalmente hago mis paseos en la tarde-noche. Estoy comprometido a brindarle a tu mascota el mejor servicio."
                        />
                    <CardPaseador 
                        img={ Paseador3 } 
                        preferencias="Perros grandes"
                        nombre="Juan Lacaze"
                        texto="Hola, soy Juan. Soy estudiante universitario y en mi tiempo libre me gusta salir a caminar, es por eso que decidí postularme como paseador de perros..."
                        />
                </div>
            </section>
        </div>
        
    </>)
}
