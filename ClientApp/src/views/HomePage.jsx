import React from 'react'
import { Nav } from '../components/Nav'
import { Nosotros } from './Nosotros'
// import Logo from "../assets/images/Logo.png";

const style = {
  header: 'bg-green-600 min-h-screen',
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