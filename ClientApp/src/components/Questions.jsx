import mas from '../assets/images/Frame-20.png';


function Questions({title, description, active, setActive}){

        return (<div className='flex justify-center flex-col m-auto overflow-hidden rounded-lg w-[268px] md:w-[400px] '>
                    <div  className=' bg-white h-[4rem] shadow-[5px_5px_20px_5px_rgba(0,0,0,0.25)] w-full '>
                            <div className='border-[0.2px] border-slate-400  bg-white flex flex-row items-center h-[100%] cursor-pointer' onClick={()=> setActive(title)}>
                                <div className='flex flex-row gap-2 px-3'>
                                    <img className='w-[1.5rem] h-[1.5rem] flex self-center' src={mas} alt="Simbolo de mas" />
                                    <div className='bg-black rounded-lg w-[0.15rem] h-[2rem] '></div>
                                </div>
                                <p className='font-semibold'>{title}</p>                                          
                            </div>
                    </div>

                <div className={(active === title ? ' h-[110px] md:h-[135px] mb-2 opacity-1' : " ") + ' bg-[#176C6D] rounded-b-lg flex overflow-hidden h-0 opacity-1 transition-all ease-in-out duration-[1s]'}  >
                    <div className=' text-white p-3 font-semibold text-xs md:text-sm flex justify-center items-center'>
                        <p>
                            {description}
                        </p> 
                    </div>
                </div>
        </div>
        )

         {/* <div className='flex justify-center flex-col items-center -mt-[14rem]'>
                    <ul  className=' bg-trasparent rounded-lg w-[19rem]  flex justify-center flex-col'   onClick={() => setIsCollapsed(!isCollapsed)} >
                     
                    {questions.map((card) => {
                       return<div className='h-[4rem] w-full mb-[5rem]' onClick={()=>(watch())}>
                            <li key={card.i} className='border-[0.2px] border-slate-400 bg-white flex flex-row items-center shadow-md shadow-slate-400 h-[100%] cursor-pointer z-10'>
                                <div className='flex flex-row gap-2 px-3'>
                                    <img className='w-[1.5rem] h-[1.5rem] flex self-center' src={mas} alt="Simbolo de mas" />
                                    <div className='bg-black rounded-lg w-[0.15rem] h-[2rem] '></div>
                                </div>
                                <p className=' font-semibold ' >{card.Q}</p>                  
                            </li>
                            <div className='bg-[#176C6D] -mt-[4rem] invisible rounded-b-lg transition duration-[2s] mb-3 -z-[3]' >
                                <p className=' text-white p-3 font-semibold text-xs duration-150' >
                                    {card.description}
                                </p>
                            </div>
                            
                       </div>
                    })}              
                    </ul>                  
                </div> */}
}

export default Questions;