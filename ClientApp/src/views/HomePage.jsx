
import Home from "../components/Home";
import Nosotros from '../components/Nosotros';
import Contacto from '../components/Contacto';
import Servicios from '../components/Servicios';
import Faqs from '../components/Faqs';
import Nav from "../components/Nav";
import { useEffect, useState } from "react";


const HomePage = () => {

    const [bgNav, setBgNav] = useState(true)


    const getBgNav = () => {
        if( window.location.pathname !== "/" || window.location.pathname === "/paseadores/") {
            setBgNav(false);
        } else {
            setBgNav(true);
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
                <Faqs />
                <Contacto />
        </>
    )
}


export default HomePage