import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Home
            </h1>

            <div>
                <Link to="/Contacto" className="btn btn-primary">contacto</Link>
                <br></br>
                <Link to="/Servicios" className="btn btn-primary">Servicios</Link>
                <br></br>
                <Link to="/login" className="btn btn-primary">login</Link>               
            </div>
        </>
    )
}

export default HomePage