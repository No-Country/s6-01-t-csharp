import re1 from '../assets/images/Rectangle-44.png';
import re2 from '../assets/images/Rectangle-45.png';
import mas from '../assets/images/Frame-20.png';
import { useState } from 'react';
import Questions from './Questions';

function Faqs(){

    const FAQS = [
        {
            Q:'Cómo contacto a un paseador',
            description:'Colocar en el buscador tu localidad y una vez hecho se desplegará como resultado los paseadores más cercanos en la zona'
        },
        {
            Q:'Método de pago',
            description:'El método de pago se hace en efectivo, cuando el paseador pase a recoger a el animal se debe efectuar el pago'
        },
        {
            Q:'Cómo saber si el paseador es confiable',
            description:'Cada uno de los paseadores tiene un perfil donde podrás observar las diferentes opiniones y evaluaciones que han realizado otros usuario.'
        },
        {
            Q:'Cómo envío una consulta',
            description:'Para hacer una consulta lo invitamos a hacer click en el link de "contacto" ubicado en la barra principal del menú'
        }
        ,{
            Q:'Hacer una review',
            description:'Para hacer una reiew debe buscar el perfil del paseador y una vez dentro hacer click sobre el botón de "añadir una review". Es importante saber que para hacer una review necesita estar logueado.'
        }
    ]

    const [active, setActive] = useState('')

    return(
        <>
            <div id='faqs' className=" bg-[#541440] w-full h-screen">
                <div className=" bg-[#541440] w-full h-full flex items-center">
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex flex-col justify-center gap-5'>
                            <img src={re1} className='w-2/3 h-[20%] ' />
                            <img src={re2} className='w-[56%] h-[20%]' />
                            <img src={re1} className='w-2/3 h-[20%]' />
                        </div>
                        <div className='' >
                            {FAQS.map((card, index) => (<Questions key={index} title={card.Q} description={card.description} active={active} setActive={setActive} />))}
                        </div> 
                        <div className='flex flex-col justify-center items-end gap-5'>
                            <img src={re1} className='w-2/3 h-[20%] ' />
                            <img src={re2} className='w-[56%] h-[20%]' />
                            <img src={re1} className='w-2/3 h-[20%]' />
                        </div>
                    </div>

               
                </div>
            </div>
        </>
    )
}

export default Faqs;