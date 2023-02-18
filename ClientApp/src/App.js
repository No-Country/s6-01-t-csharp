import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import AppRoutes from './AppRoutes';


const App = () => {

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