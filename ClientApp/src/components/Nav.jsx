import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const style = {
    nav: "h-20 bg-yellow-600 w-full fixed",
    wrapper_nav:"bg-red-900 h-full mx-auto  px-4 flex items-center justify-between w-[90%] max-w-screen-2xl ",
    ul:"w-[60%] flex justify-evenly",
    li:" border-b-4 h-full border-primary py-1",
    btn_login: "bg-primary  w-40 py-2 px-4 rounded-lg text-textLight text-xl",
    a: "text-textLight text-xl ",
}

export const Nav = () => {

    return (<>
        <nav className= { style.nav } >
            <div className= { style.wrapper_nav } >
                <a  href="/">
                    <img className="w-14" src={ Logo } alt="Logotipo The Walking Dog" />
                </a>
                
                <ul className={ style.ul } >
                    <li className= { style.li }>
                        <a className={ style.a } href="#">Home</a>
                    </li>
                    <li className= { style.li }>
                        <a className={ style.a } href="#servicios">Servicios</a>
                    </li>
                    <li className= { style.li }>
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
