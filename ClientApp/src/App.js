import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import AppRoutes from './AppRoutes';




const App = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.slice(1));
            if (element) {
                element.scrollIntoView();
            }
        }
    }, []);
    return (
        <>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, path } = route;
                    return <Route key={index} path={ path } element={element} />;
                })}
            </Routes>
        </>
    );
}
export default App