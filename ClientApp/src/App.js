import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import AppRoutes from './AppRoutes';
import HomePage from './views/HomePage';
import Contacto from './components/Contacto';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
    const style = {
        header: ' min-h-full relative',
        img_fondo: "w-full h-full -z-50 absolute bottom-0 mx-auto",
    }


    return (
        <>
            <header  className={ style.header }>
                <Nav/>
            </header>
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