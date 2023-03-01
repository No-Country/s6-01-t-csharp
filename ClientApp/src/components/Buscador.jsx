import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import search from '../../src/assets/images/search.svg'

function Buscador() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ directions: [], walkers: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [hasClickedResult, setHasClickedResult] = useState(false);

    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);
        setHasClickedResult(false); // Reset state when user types in the search box

    };

    const fetchData = async () => {
        if (query.length > 2 && !hasClickedResult) { 
            setIsLoading(true);
            try {
                const response = await fetch(`/api/Busqueda?query=${query}`, {
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
                    setQuery('Hacer Login Porfavor');
                    localStorage.removeItem('jwtToken');
                    // Redirect to the login page or display an error message
                    // depending on your application's requirements
                } else {
                    setQuery('Test Auth');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        } else {
            setResults({ directions: [], walkers: [] });
        }
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    return (
        <>
            <div className="relative w-[100%] border-dark border-solid border-[3px]  rounded-lg">
                <input
                    type="text"
                    className={`w-[100%] h-12 placeholder:text-md ${results.directions.length > 0 || isLoading ? "rounded-t-lg" : "rounded-lg"} focus:outline-none px-5`}
                    placeholder="Localidad, barrio o ciudad"
                    value={query}
                    onChange={handleInputChange}
                />
                {isLoading ? (
                    <div className="bg-white px-5">Loading...</div>
                ) : (
                    results.directions.length > 0 && (
                        <div className="rounded-lg">
                            <ul className="bg-white rounded-b-lg px-5">
                                {results.directions.map((direction, i) => (
                                    <div key={direction} className={`py-2 ${i === results.directions.length - 1 ? "border-b-none" : "border-b border-black"}`}>
                                        <Link
                                            to={`/paseadores/${direction}`}
                                            onClick={() => {
                                                setQuery(direction);
                                                setResults({ directions: [], walkers: [] });
                                                setHasClickedResult(true);
                                            }}
                                            className="text-gray-900 hover:text-blue-500"
                                        >
                                            {direction}
                                        </Link>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )
                )}
            </div>
            <Link
                to={query ? `/paseadores/${query}` : `#`}
                className="bg-dark max-h-[52px] w-12 rounded-md computer:w-[20%] computer:h-16 flex content-center items-center justify-center"
            >
                <img src={search} alt="iconSearch" className="w-[20px] h-[30px] m-auto w- computer:text-sm com" />
            </Link>
        </>
    );
}

export default Buscador;