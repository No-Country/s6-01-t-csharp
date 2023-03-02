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

    const [results, setResults] = useState({ directions: [], walkers: [] });

    const getPaseadores = async (direccion) =>{
        fetchData(direccion);
    }
    const fetchData = async (direccion) => {
        try {
            const response = await fetch(`/api/Busqueda?query=${direccion}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                if (data.directions && data.walkers) {
                    setResults(data);
                } else {

                    setResults({ directions: [], walkers: [] });
                }
            } else if (response.status === 401) { 
                alert("Hacer Login");
                localStorage.removeItem('jwtToken');
                // Redirect to the login page or display an error message
                // depending on your application's requirements
            } else {
                
            }
        } catch (error) {
            console.error(error);
        }
    };
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
                    {results && results.walkers.map((walker)=>(
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
