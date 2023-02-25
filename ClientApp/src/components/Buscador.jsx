﻿import React, { useState } from 'react';

function Buscador() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ directions: [], walkers: [] });

    async function handleInputChange(event) {
        const searchQuery = event.target.value;
        setQuery(searchQuery);

        if (searchQuery.length > 0) {
            try {
                const response = await fetch(`https://cohortes6.azurewebsites.net/api/Busqueda?query=${searchQuery}`);
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

    return (
        <div className="p-4 relative w-[100%]">
            <input
                type="text"
                className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                placeholder="localidad, barrio o ciudad"
                value={query}
                onChange={handleInputChange}
            />   
            {results.directions.length > 0 && (
                <div className="mt-4">
                    <h2 className="font-bold mb-2 text-lg text-gray-800">Directions:</h2>
                    <ul className="list-unstyled">
                        {results.directions.map((direction) => (
                            <li key={direction} className="py-2 border-b border-gray-200">
                                <a href="#" className="text-gray-900 hover:text-blue-500">{direction}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Buscador;