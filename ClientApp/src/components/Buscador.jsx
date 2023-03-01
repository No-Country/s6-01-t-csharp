import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import search from '../../src/assets/images/search.svg'

function Buscador() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ directions: [], walkers: [] });

    const handleInputChange = async (event) =>{
        const searchQuery = event.target.value;
        setQuery(searchQuery);
        
        if (searchQuery.length > 0) {
            try {
                const response = await fetch(`https://thewalkingdog.bsite.net/api/Busqueda?query=${searchQuery}`);
                const data = await response.json();

                if (data.directions && data.walkers) {
                    setResults(data);
                } else {
                    setResults({ directions: [], walkers: [] });
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            setResults({ directions: [], walkers: [] });
        }
    }

    useEffect(() => {
        handleInputChange()
    }, [query])
    

    return (
        <>
            <div className="relative w-[100%] border-dark border-solid border-[3px]  rounded-lg">
                <input
                    type="text"
                    className={`w-[100%] h-12 placeholder:text-md ${results.directions.length > 0 ? "rounded-t-lg" : "rounded-lg" } focus:outline-none px-5`}
                    placeholder="Localidad, barrio o ciudad"
                    value={query}
                    onChange={handleInputChange}
                />   
                {results.directions.length > 0 && (
                    <div className="rounded-lg">
                        <ul className="bg-white rounded-b-lg px-5">
                            {results.directions.map((direction, i) => (
                                <div key={direction} className={`py-2 ${i === results.directions.length - 1 ? "border-b-none" : "border-b border-black"}`}>
                                     <Link to={`/paseadores/${direction}`}className="text-gray-900 hover:text-blue-500">{direction}</Link> 
                                </div>  
                            ))}
                            
                        </ul>
                    </div>
                )}
            </div>
            <Link 
                to={query ? `/paseadores/${query}` : `#`}
                className='bg-dark max-h-[52px] w-12 rounded-md computer:w-[20%] computer:h-16 flex content-center items-center justify-center'>
                    <img src={search} alt='iconSearch' className='w-[20px] h-[30px] m-auto w- computer:text-sm com'/>
            </Link>
        </>
    );
}

export default Buscador;