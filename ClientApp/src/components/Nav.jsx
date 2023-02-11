// import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";


export const Nav = () => {


    return (<>
        <nav className="h-20 bg-yellow-500 flex items-center">
            <img className="w-14" src={ Logo } alt="Logotipo The Walking Dog" />
            <ul className="flex" >
                <li>
                    <a href="#servicios">Servicios</a>
                </li>
                <li>
                    <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                    <a href="#consultas">Consultas</a>
                </li>
                <li>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
            
        </nav>
    </>)
}
