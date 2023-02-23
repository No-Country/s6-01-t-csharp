
import Home from "../components/Home";
import Nosotros from '../components/Nosotros';
import Contacto from '../components/Contacto';
import Servicios from '../components/Servicios';
import Nav from "../components/Nav";
import { useEffect, useState } from "react";


const HomePage = () => {

    const [bgNav, setBgNav] = useState(true)


    const getBgNav = () => {
        if( window.location.pathname !== "/" || window.location.pathname === "/paseadores/") {
            setBgNav(false);
        } 
    }

    useEffect(() => {
        getBgNav();
    })


    return (
        <>
                <Nav bgNav={ bgNav }/>
                <Home/>
                <Servicios />              
                <Nosotros />
                <Contacto />
        </>
    )
}


export default HomePage