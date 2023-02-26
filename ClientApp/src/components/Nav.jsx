import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { EnlacesNav } from "./EnlacesNav";

const style = {
    nav: "h-[10vh] w-full fixed z-50",
    wrapper_nav:" h-full mx-auto lg:px-10  flex flex-wrap items-center justify-between rounded-b-md lg:rounded-b-0  lg:justify-around w-full transition-all duration-300 ease-in-out ",
    ul:"lg:w-[80%] lg:flex lg:justify-around lg:overflow-visible lg:flex-row lg:bg-transparent lg:px-0 lg:py-0",
    ulMobile:" w-full block  flex-col bg-alterno px-3 py-3 text-center",
    li:" h-full my-2 lg:my-0 py-1 hover:bg-primary lg:hover:bg-transparent hover:border-b-4 border-primary transition-all duration-200 ease-in- text-white ",
    btn_login: "bg-primary  py-2 px-4 rounded-lg text-white text-xl hover:bg-secondary transition-all duration-300 ease-in-out",
    bg_transparent: "bg-transparent",
    bg_active: "bg-alterno",
    btnResponsive: "flex items-center px-3 py-2 border rounded text-gray-400 text-gray-400 hover:text-white hover:border-white",
    border_bottom:"border-b-4 border-primary",
}

const enlaces = [0, 1, 2, 3 ,4 ];


function Nav( { bgNav } ) {    

    const [bgTransparente, setBgTransparent ] = useState(true);
    const [idEnlace, setIdEnlace] = useState(0);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [screeWidth, setScreenWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);


    const cambiarEnlace = id => {
        setIdEnlace(id)
    }

//Se activa el boton del Nav mobile
    function toggleActive() {
        setToggle(!toggle);
    }
    

//Función que evalúa el scrollY de la pantalla para cambiar el Bg-Nav
    useEffect(() => {
        const addBgColor = () => {

            setScrollY(window.scrollY)
    
            if(scrollY > 90 || screeWidth < 1024){
                setBgTransparent(false);
            }  else {
                setBgTransparent(true);
            }
        }
        window.addEventListener("scroll", addBgColor);
        return () => window.removeEventListener("scroll", addBgColor);
    }, [scrollY,screeWidth])


//Función que evalúa el tamaño de la pantalla para cambiar el Bg-Nav
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            (scrollY < 90 || screeWidth < 1024) && setBgTransparent(false);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [screeWidth, scrollY]);


    return (<>
        <nav className= { style.nav } >
            <div className= { `${ style.wrapper_nav } ${ (bgTransparente && bgNav)? style.bg_transparent : style.bg_active }` } >

                <Link  to="/" className="flex-shrink-0 pl-3 lg:pl-0">
                    <img className="w-14" src={ Logo } alt="Logotipo The Walking Dog" />
                </Link>

                <div className="block pr-3 lg:pr-0 lg:hidden">
                    <button
                        onClick={ toggleActive }
                        className={ style.btnResponsive }>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                
                <ul className={ `${style.ul } ${style.ulMobile} ${toggle ? "overflow-visible" : "hidden"}`} >
                    { enlaces.map( el => (
                        <EnlacesNav
                            className={`${style.li} ${idEnlace === el ? style.border_bottom : ""}`}
                            key={el} 
                            index={el}
                            onClick={ () => cambiarEnlace(el)}/>
                    ))}

                    <Link to="/login"> 
                        <button className= { style.btn_login }>Iniciar sesión </button>
                    </Link>
                </ul>
                
            </div>
            

            
        </nav>
    </>)
}

export default Nav;