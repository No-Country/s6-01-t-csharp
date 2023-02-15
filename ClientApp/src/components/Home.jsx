import background from '../../src/assets/images/fondo.png'
import puppy from '../../src/assets/images/VectorPuppy.png'
import search from '../../src/assets/images/Vector.png'

import './principal.css'

const Principal = () => {
    return (
        <div className='container'>
            <img src={background} alt="background" className=''/>

            <div className="principal">
                <div className='principal-2'>
                    <h1 className=''>The Walking Dog</h1>
                    <img src={puppy} alt="icon_puppy" className='' />
                </div>
                <div className='principal-3'>
                    <h2 className=''>Encuentra a tu Paseador </h2>
                    <div>
                        <input type="text" name="" id="" placeholder='localidad, barrio o cuidad' className=''/>
                        <button>
                            <img src={search} alt="iconSearch" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principal;
