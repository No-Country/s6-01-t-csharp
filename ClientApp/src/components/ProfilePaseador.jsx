import profile from "../assets/images/perfilPaseador.png"
import star from "../assets/images/Star.svg"
import starYellow from "../assets/images/Star-Y.svg"
import starGreen from "../assets/images/Star-G.svg"
import like from "../assets/images/like.svg"
import disLike from "../assets/images/dislike.svg"

export const ProfilePaseador = () => {
    return (
        <>
            <div className="pt-32 pl-10 pr-10 flex flex-col flex-wrap">
                <div className="flex gap-4 flex-wrap">
                    <button className="-mt-52 mr-6">
                        <svg className="w-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <img src={profile} alt="profile photo" />
                    <div className="flex flex-col justify-start gap-14 flex-wrap">
                        <div className="flex w-full h-8 gap-1 mt-2">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <div className="flex flex-col flex-wrap">
                            <div className="flex gap-3 text-dark font-normal text-lg">
                                <h2>Preferencias:</h2>
                                <p>Pequeños perros</p>
                            </div>
                            <h2 className="font-bold text-[35px]">José Perdomo</h2>
                        </div>
                    </div>
                </div>

                {/* Descripcion del paseador */}
                <div className="pl-16 pt-5 w-4/5">
                    <p className="text-lg font-normal text-[#595757]">
                        Soy un hombre de 34 años que disfruta de las actividades al aire libre, es por motivo (sumado al hecho de que me gustan los animales)
                        que decidí postularme como paseador independiente. Mis preferencias son perros pequeños, sin embargo, puedo adaptarme bien a perros de mediano
                        tamaño.<br /> Mis reviews reflejan lo bien que hago mi trabajo. Siempre intento brindar el mejor servicio a las mascotas que me toca pasear.
                    </p>

                    {/* Opiniones del servcio */}
                    <div className="flex mt-5 ">
                        <h2 className="text-xl font-semibold"> Opiniones del servicio ( 5 Estrellas )</h2>
                        <img src={starYellow} alt="star opinion" className="ml-3 w-5"/>
                        <img src={starYellow} alt="star opinion" className="w-5"/>
                        <img src={starYellow} alt="star opinion" className="w-5"/>
                        <img src={starYellow} alt="star opinion" className="w-5"/>
                        <img src={starYellow} alt="star opinion" className="w-5"/>
                    </div>
                    <button className="bg-[#5B5B5B] p-2 w-40 rounded-md text-white text-sm mt-5">Añadir Review </button>
                    <div className="flex mt-2 gap-1">
                        <img src={starGreen} alt="star opinion" />
                        <img src={starGreen} alt="star opinion" />
                        <img src={starGreen} alt="star opinion" />
                        <img src={starGreen} alt="star opinion" />
                        <img src={starGreen} alt="star opinion" />
                    </div>
                </div>

                {/* Comentarios */}
                <div className="pl-16 mt-5 flex justify-evenly gap-12 w-full">
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-col">
                                <p className="text-[#5B5B5B] font-normal text-base ">
                                Excelente serivicio. José es un gran profesional que siempre está dispuesto a pasear a mis mascotas. Siempre
                                lo elijo a el ya que le tengo mucha confianza y se que mi perrita queda en las mejores manos. No puedo decir
                                mas que palabras buenas por el. A todo aquel que este buscando un paseador no dude en elegirlo., no se arrepentirá.
                                </p>
                                <div className="flex gap-2">
                                    <button className="flex gap-2 content-center text-sm mt-2 rounded-md p-3 border-[#9F9B9B] border-solid border-2">
                                        <img src={like} alt="like" />
                                        6 usuarios
                                    </button>
                                    <button className="flex gap-2 content-center text-sm mt-2 rounded-md p-3 border-[#9F9B9B] border-solid border-2">
                                        <img src={disLike} alt="dislike" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col mt-5">
                                <p className="text-[#5B5B5B] font-normal text-base">
                                    Excelente trabajo. José se presentó con la mejor onda y desde el primer momento se vió dispuesto a pasear a mi perro.
                                </p>
                                <div className="flex gap-2">
                                    <button className="flex gap-2 content-center text-sm mt-2 rounded-md p-3 border-[#9F9B9B] border-solid border-2">
                                        <img src={like} alt="like" />
                                        6 usuarios
                                    </button>
                                    <button className="flex gap-2 content-center text-sm mt-2 rounded-md p-3 border-[#9F9B9B] border-solid border-2">
                                        <img src={disLike} alt="dislike" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-6 content-center items-center">
                            <p className="text-lg font-bold w-full text-center">Costo por hora de paseos de la mascota: $15 </p>
                            <p className="text-lg font-bold w-full text-center ">
                                ¿Quieres que este paseador se haga cargo de tu perro? <br />
                                Para seguir con el proceso presiona el siguiente botón
                            </p>
                            <button className="bg-[#01B1B0] p-3 text-white w-48 ">Rellenar Formulario</button>
                        </div>
                    </div>
                    <p className="text-[#197278] font-normal mt-8 mb-8 pl-16">Mostrar todas las opiniones</p>
            </div>
        </>
    )
}
