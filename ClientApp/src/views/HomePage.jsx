
import { Nav } from '../components/Nav'
import { Nosotros } from './Nosotros'


const style = {
  header: ' min-h-full relative',
  img_fondo: "w-full h-full -z-50 absolute bottom-0 mx-auto",
}

const HomePage = () => {
  return (<>
    
    <header className={ style.header }>
      <Nav/>
    </header>
    
    <Nosotros />
    
    
  </>)
}

export default HomePage