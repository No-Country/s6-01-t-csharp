import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { EnlacesNav } from "./EnlacesNav";

const style = {
    nav: "h-[10vh] w-full fixed z-50",
    wrapper_nav:" h-full mx-auto  px-10 flex items-center justify-between w-full max-w-screen-2xl transition-all duration-300 ease-in-out ",
    ul:"w-[60%] flex justify-evenly",
    li:"  h-full  py-1 hover:border-b-4 border-primary transition-all duration-200 ease-in- text-white ",
    btn_login: "bg-primary  w-40 py-2 px-4 rounded-lg text-white text-xl",
    bg_transparent: "bg-transparent",
    bg_active: "bg-alterno",
    border_bottom:"border-b-4 border-primary",
}

const enlaces = [0, 1, 2, 3 ,4 ];


function Nav() {    

    const [bgTransparente, setBgTransparent ] = useState(true);

    // let url = window.location.pathname

    // if(url !== '/Home'){
    //     {style.nav = 'h-[10vh] w-full fixed z-50 bg-teal-700'}
    //     {style.btn_login = "bg-primary  w-40 py-2 px-4 rounded-lg text-white text-xl bg-teal-500"}
    // }else{
    //     {style.nav = 'h-[10vh] w-full fixed z-50 bg-transparent'}
    //     {style.btn_login = "bg-primary  w-40 py-2 px-4 rounded-lg text-white text-xl bg-transparent"}
    // }

    const [idEnlace, setIdEnlace] = useState(0);

    const cambiarEnlace = id => {
        setIdEnlace(id)
    }
    

    const addBgColor = () => {
        if(window.scrollY > 90  || (window.location.pathname === "/login")){
            setBgTransparent(false)
        } else {
            setBgTransparent(true);
        }
    }

    window.addEventListener("scroll", addBgColor);

    return (<>
        <nav className= { style.nav } >
            <div className= 
            { `${ style.wrapper_nav } ${ bgTransparente ? style.bg_transparent : style.bg_active }` } >
                <a  href="#">
                    <img className="w-14" src={ Logo } alt="Logotipo The Walking Dog" />
                </a>
                
                <ul className={ style.ul } >
                    { enlaces.map( el => (
                        <EnlacesNav
                            className={`${style.li} ${idEnlace === el ? style.border_bottom : ""}`}
                            key={el} 
                            index={el}
                            onClick={ () => cambiarEnlace(el)}/>
                    ))}
                </ul>
                <Link to="/login"> 
                    <button className= { style.btn_login }>Iniciar sesión </button>
                </Link>
            </div>
            

            
        </nav>
    </>)
}

export default Nav;