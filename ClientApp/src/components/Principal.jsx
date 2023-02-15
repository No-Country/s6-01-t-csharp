
import background from '../../src/assets/images/fondo.svg'
import puppy from '../../src/assets/images/Vectorpuppy.svg'
import search from '../../src/assets/images/search.svg'


const Principal = () => {
    return (
        <div className='w-100% h-full flex justify-center font-["poppins"]'>
            <img src={background} alt="background" className=''/>

            <div className='absolute top-0 flex flex-col items-center content-between'>
                <div className='flex justify-center items-center content-center gap-2 text-3xl computer:mt-[25%] computer:w-100%'>
                    <h1 className='uppercase text-principal font-semibold mt-[20%] text-center text-2xl underline computer:text-6xl computer:-mt-[20%]'>The Walking Dog</h1>
                    <img src={puppy} alt='icon_puppy' className='w-6 mt-20% computer:w-[5%] computer:-mt-[20%]'/>
                </div>
                <div className='flex flex-col justify-center items-center w-[70vw] font-medium mt-[50%] computer:-mt-[5%]'>
                    <h2 className='text-2xl text-white font-medium computer:text-6xl computer:font-semibold computer:mt-50% computer:-mb-[50%]'>Encuentra a tu Paseador </h2>
                    <div className='flex content-center gap-2 computer:mt-[50%]'>
                        <input type='text' placeholder='localidad, barrio o cuidad' className='w-11/12 h-7 p-2 border-dark border-solid border-2 rounded placeholder:p-4 placeholder:text-sm computer:w-[80vw] computer:h-16 computer:placeholder:text-lg'/>
                        <button className='bg-dark w-10 rounded-md computer:w-[20%] computer:h-16 flex content-center items-center justify-center'>
                            <img src={search} alt='iconSearch' className='w-[20%] m-auto w- computer:text-sm com'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principal;
