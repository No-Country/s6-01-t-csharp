
import background from '../../src/assets/images/fondo.svg'
import puppy from '../../src/assets/images/Vectorpuppy.svg'
import search from '../../src/assets/images/search.svg'

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

/*
 <div className='sm:w-full h-full text-xs'>
            <img src={background} alt="background" className='absolute'/>

            <div className="relative flex flex-col justify-between items-center gap-96 w-full h-full ">
                <div className='inset-2 w-6/12 m-auto text-center top-32 flex items-center content-center gap-3 mt-36 bg-orange-600'>
                    <h1 className='uppercase sm:text-sm lg:text-7xl text-principal font-medium underline'>The Walking Dog</h1>
                    <img src={puppy} alt="icon_puppy" className='sm:w-4' />
                </div>
                <div className='relative flex flex-col gap-3 bg-yellow-600 w-full text-center'>
                    <h2 className='text-white lg:text-7xl'>Encuentra a tu Paseador </h2>
                    <div>
                        <input type="text" name="" id="" placeholder='localidad, barrio o cuidad' className='w-2/5'/>
                        <button>
                            <img src={search} alt="iconSearch" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
*/