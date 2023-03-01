import { useState, useEffect } from 'react'
import { CardPaseador } from './CardPaseador';
import Nav from './Nav';
import Buscador from './Buscador';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ProfilePaseadores } from './ProfilePaseadores';


const styles = {
    wrapper:"w-[90%] md:w-[80%] min-h-[100vh] flex flex-col items-center",
    flex: "d-flex ",
    titulo: "text-md font-medium mt-5",
    buscador: "max-w-screen-md w-3/5 max-h-24 flex content-center gap-2",
    container_paseadores:"w-[100%] md:w-[80%]",
}


export const Paseadores = () => {

    const {direccion} = useParams()

    const [resultados, setResultados] = useState("");

    const getPaseadores = async (direccion) =>{

            try {
                const response = await fetch(`https://thewalkingdog.bsite.net/api/Busqueda?query=${direccion}`);
                const data = await response.json();
                setResultados(data)
            } catch (error) {
                console.error(error);
            }
    }

    useEffect(() => {
        getPaseadores(direccion)
        
    }, [direccion])


    return (<>
        <Nav />
        <div className='w-full flex justify-center pt-[13vh]'>
            <section className={ styles.wrapper }>
                <div className='flex gap-1 w-full'>

                    <Buscador />
                </div>

                <h3 className={ styles.titulo } >Resultados de busqueda para: {direccion}</h3>

                <div className={ styles.container_paseadores } >
                    {resultados && resultados.walkers.map((walker)=>(
                        <Link key={walker.id} to={`/perfilPaseador/${walker.id}`} className="cursor-pointer">
                         <CardPaseador 
                                img={walker.avatar}
                                preferencias={walker.preferencias}
                                nombre={`${walker.nombres} ${walker.apellidos}`}
                                texto={walker.descripcion}
                                rating={walker.estrellas}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
        
    </>)
}
