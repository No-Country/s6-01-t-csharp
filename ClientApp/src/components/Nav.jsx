import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const style = {
    nav: "h-[10vh] w-full fixed z-50 ",
    wrapper_nav:" h-full mx-auto  px-10 flex items-center justify-between w-full max-w-screen-2xl transition-all duration-300 ease-in-out",
    ul:"w-[60%] flex justify-evenly",
    li:"  h-full  py-1",
    btn_login: "bg-primary  w-40 py-2 px-4 rounded-lg text-textLight text-xl",
    a: "text-textLight text-xl ",
    bg_transparent: "bg-transparent",
    bg_active: "bg-alterno",
    border_bottom:"border-b-4 border-primary",
}

export const Nav = () => {

    const [bgTransparente, setBgTransparent ] = useState(true);
    const [borderBottom, setBorderBottom] = useState(true);

    const addBgColor = () => {
        if(window.scrollY > 90 ){
            setBgTransparent(false)
        } else {
            setBgTransparent(true);
        }
    }

    window.addEventListener("scroll", addBgColor);

    return (<>
        <nav className= { style.nav } >
            <div className= { `${ style.wrapper_nav } ${ bgTransparente ? style.bg_transparent : style.bg_active }` } >
                <a  href="/">
                    <img className="w-14" src={ Logo } alt="Logotipo The Walking Dog" />
                </a>
                
                <ul className={ style.ul } >
                    <li className= { `${style.li} ${window.location.pathname === "/" ? style.border_bottom : ""}` }>
                        <a className={ style.a } href="#">Home</a>
                    </li>
                    <li className= { `${style.li} ${window.location.pathname === "/#servicios" ? style.border_bottom : ""}` }>
                        <a className={ style.a } href="#servicios">Servicios</a>
                    </li>
                    <li className= { `${style.li} ${window.location.pathname === "/#nosotros" ? style.border_bottom : ""}` }>
                        <a className={ style.a } href="#nosotros">Nosotros</a>
                    </li>
                    <li className= { style.li }>
                        <a className={ style.a } href="#consultas">Consultas</a>
                    </li>
                    <li className= { style.li }>
                        <a className={ style.a } href="#contacto">Contacto</a>
                    </li>
                </ul>
                <Link to="/login"> 
                    <button className= { style.btn_login }>Iniciar sesión </button>
                </Link>
            </div>
            

            
        </nav>
    </>)
}
