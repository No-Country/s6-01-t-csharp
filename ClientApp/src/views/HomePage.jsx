import React from 'react'
import { Nav } from '../components/Nav'
// import Logo from "../assets/images/Logo.png";

const HomePage = () => {
  return (<>
    
    <header className='bg-green-600 min-h-screen'>
      <Nav/>
      
      <div>Hola World</div>
    </header>
    <section id='servicios' className='min-h-screen bg-red-400'>
      <h3>Servicios</h3>
    </section>
    
  </>)
}

export default HomePage