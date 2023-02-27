import { useState, useEffect } from "react"
import profile from "../assets/images/perfilPaseador.png"
import star from "../assets/images/Star.svg"

import { useParams, useNavigate } from "react-router"
import Nav from "./Nav"
import Reviews from "./Reviews"
import { Paseadores } from "./Paseadores"

export const ProfilePaseadores = () => {

    const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}

    const {id} = useParams()

    const [paseador, setPaseador] = useState("");

    const getPaseador = async (id) =>{

            try {
                const response = await fetch(`/api/Paseadores/${id}`);
                const data = await response.json();
                setPaseador(data)
                console.log(data)
            } catch (error) {
                console.error(error);
            }
    }

    useEffect(() => {
        getPaseador(id)
        
    }, [])

    return (
        <>
        <Nav />
            <div className="w-[90%] self-center mx-auto pt-32 flex justify-center flex-col">
                <div className="flex gap-4 relative">
                    <button className="absolute -left-5 top-20 sm:top-0 sm:-left-10" onClick={goBack}>
                        <svg className="w-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <img src={paseador && paseador.avatar} alt="profile photo" className="rounded-lg h-[180px]" />
                    <div className="flex flex-col justify-center md:justify-start md:gap-10 flex-wrap">
                        <div className="flex w-full gap-1 mt-2">
                            {Array.from({ length: paseador.estrellas }).map((_, i) => (
                                <img src={star} alt="star" className="h-[15px] md:h-[20px]" />
                            ))}
                        </div>
                        <div className="flex flex-col flex-wrap">
                            <div className="flex gap-1 md:gap-3 text-dark font-normal text-xs md:text-lg">
                                <h2>Preferencias: </h2>
                                <p>{paseador && paseador.preferencias.join(', ')}</p>      
                            </div>
                            <h2 className="font-bold text-lg md:text-[35px]">{paseador && paseador.nombres} {paseador && paseador.apellidos}</h2>
                        </div>
                    </div>
                </div>

                {/* Descripcion del paseador */}
                <div className="pt-5 w-full md:w-4/5">
                    <p className="text-lg font-normal text-[#595757]">
                        {paseador.descripcion}
                    </p>
                </div>
                <h2 className="text-xl font-bold mb-4">Disponibilidad</h2>
                {/*<div className="">*/}
                {/*    <h2 className="text-xl font-bold mb-4">Disponibilidad</h2>*/}
                {/*    <table className="w-full border-collapse">*/}
                {/*        <thead>*/}
                {/*            <tr className="border-b-2 border-gray-200">*/}
                {/*                <th className="px-4 py-2">Día de la semana</th>*/}
                {/*                <th className="px-4 py-2">Hora de inicio</th>*/}
                {/*                <th className="px-4 py-2">Hora final</th>*/}
                {/*            </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*            {paseador && paseador.disponibilidad.map((item, index) => (*/}
                {/*                <tr key={index} className="border-b-2 border-gray-200">*/}
                {/*                    <td className="px-4 py-2">{item.diaDeLaSemana}</td>*/}
                {/*                    <td className="px-4 py-2">{item.horaInicio}:00 hrs</td>*/}
                {/*                    <td className="px-4 py-2">{item.horaFinal}:00 hrs</td>*/}
                {/*                </tr>*/}
                {/*            ))}*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}
                <div className="">
                    <ul className="flex gap-4 flex-wrap">
                        {paseador && paseador.disponibilidad.map((item, index) => (
                            <li key={index} className="py-4 bg-white rounded-lg shadow-md p-4">
                                <p className="font-medium">{item.diaDeLaSemana}</p>
                                <p className="text-gray-500">Hora de inicio: {item.horaInicio}:00 hrs</p>
                                <p className="text-gray-500">Hora final: {item.horaFinal}:00 hrs</p>
                            </li>
                        ))}
                    </ul>
                </div>
                    <div className="mt-5 flex flex-col-reverse items-center md:flex-row justify-evenly gap-9 w-full">
                        <Reviews />
                        <div className="w-full pb-5 md:w-1/2 flex flex-col gap-6 justify-center items-center">
                            <p className="text-lg font-bold w-full text-center">Costo por hora de paseos de la mascota: ${paseador && paseador.cobroPorHora} </p>
                            <p className="text-lg font-bold w-full text-center ">
                                ¿Quieres que este paseador se haga cargo de tu perro? <br />
                                Para seguir con el proceso presiona el siguiente botón
                            </p>
                            <button className="bg-[#01B1B0] p-3 text-white w-48 rounded-md">Rellenar Formulario</button>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}