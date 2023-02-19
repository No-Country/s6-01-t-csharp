
import background from '../../src/assets/images/fondo.svg'
import puppy from '../../src/assets/images/Vectorpuppy.svg'
import search from '../../src/assets/images/search.svg'
import { useState } from 'react'


const Home = () => {

    const [localidad, setLocalidad] = useState("");

    const onClick = () => {
        console.log(localidad);
    }


    return (
        <div className='w-100% h-screen flex justify-center font-["poppins"]'>
            <img src={background} alt="background" className='w-100% object-cover'/>

            <div className='absolute w-full top-0 flex justify-between pt-20 pb-20 md:pt-0 flex-col h-full'>
                <div className='flex flex-col justify-center items-center content-center gap-2 text-2xl w-[100%]'>
                    <div className='flex justify-center items-center lg:mt-[10%] gap-2 w-full'>
                        <h1 className='uppercase text-principal mt-[20%] lg:mt-0 text-center sm:text-4xl text-2xl text-bold font-bold computer:text-6xl'>The Walking Dog</h1>
                        <img src={puppy} alt='icon_puppy' className='w-6 mt-20% lg:mt-0 computer:w-[5%] '/>
                    </div>
                    <div className='border-b-2 border-b-white w-[70%] sm:w-[40%] 2xl:w-[20%]'/>
                </div>
                <div className='flex flex-col justify-center gap-5 items-center w-full md:w-[70%] mx-auto font-medium'>
                    <h2 className='text-2xl text-white font-medium computer:text-6xl computer:font-semibold'>Encuentra a tu paseador </h2>
                    <div className='flex justify-end gap-1 w-[90%]'>
                        <input type='text' placeholder='localidad, barrio o cuidad' className='w-[100%] h-12 p-2 border-dark border-solid border-2 rounded placeholder:p-4 placeholder:text-sm computer:w-[80vw] computer:h-16 computer:placeholder:text-lg'/>
                        <button className='bg-dark w-12 rounded-md computer:w-[20%] computer:h-16 flex content-center items-center justify-center'>
                            <img src={search} alt='iconSearch' className='w-[10px] h-[15px] m-auto w- computer:text-sm com'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
