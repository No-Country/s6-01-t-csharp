
import { Nav } from '../components/Nav'
import { Nosotros } from './Nosotros'
import perro from "../assets/images/perro.png";

const style = {
  header: ' min-h-full relative',
  img_fondo: "w-full h-full -z-50 absolute bottom-0 mx-auto",
}

const HomePage = () => {
  return (<>
    
    <header className={ style.header }>
      <Nav/>
      <img
        className= { style.perro_fondo }
        src={ perro } 
        alt="Perro, mascota paseada a través de The Walking Dog" />
      <img
        className= { style.img_fondo }
        src={ perro } 
        alt="Perro, mascota paseada a través de The Walking Dog" />
    </header>
    
    <Nosotros />
    
    
  </>)
}

export default HomePage