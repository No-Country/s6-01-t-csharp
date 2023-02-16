
import Nav from '../components/Nav';
import Home from "../components/Home";
import Nosotros from '../components/Nosotros';
import Contacto from '../components/Contacto';
import Servicios from '../components/Servicios';

const HomePage = () => {

    
    const style = {
        header: ' min-h-full relative',
        img_fondo: "w-full h-full -z-50 absolute bottom-0 mx-auto",
    }

    return (
        <>
            <header  className={ style.header }>
                <Nav/>
                <Home/>
            </header>
                
                <Nosotros />
                <Servicios />
                <Contacto />
        </>
    )
}


export default HomePage