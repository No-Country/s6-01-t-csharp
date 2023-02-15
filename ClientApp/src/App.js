import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import AppRoutes from './AppRoutes';
import HomePage from './views/HomePage';

const App = () => {

    return (
        <>
            <HomePage />
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </>       
    );
}

export default App