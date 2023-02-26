import React from 'react'
import starYellow from "../assets/images/Star-Y.svg"
import starGreen from "../assets/images/Star-G.svg"
import like from "../assets/images/like.svg"
import disLike from "../assets/images/dislike.svg"

const Reviews = () => {
  return (
    <>
        <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col gap-2 md:gap-0 justify-center items-center md:justify-start md:flex-row mt-5 ">
                <h2 className="text-md md:text-xl font-semibold text-center md:text-left"> Opiniones del servicio (5 Estrellas)</h2>
                <div className='flex justify-center'>
                    <img src={starYellow} alt="star opinion" className="ml-3 w-5"/>
                    <img src={starYellow} alt="star opinion" className="w-5"/>
                    <img src={starYellow} alt="star opinion" className="w-5"/>
                    <img src={starYellow} alt="star opinion" className="w-5"/>
                    <img src={starYellow} alt="star opinion" className="w-5"/>
                </div>
            </div>
            <button className="bg-[#5B5B5B] p-2 w-40 rounded-md text-white text-sm mt-5">Añadir Review </button>
            <div className="flex mt-2 gap-1">
                <img src={starGreen} alt="star opinion" />
                <img src={starGreen} alt="star opinion" />
                <img src={starGreen} alt="star opinion" />
                <img src={starGreen} alt="star opinion" />
                <img src={starGreen} alt="star opinion" />
            </div>
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
            <p className="text-[#197278] font-normal mt-8 mb-8 pl-16">Mostrar todas las opiniones</p>
        </div>
    </>
  )
}

export default Reviews