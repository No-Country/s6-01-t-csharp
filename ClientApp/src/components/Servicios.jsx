import React from "react";
import pet1 from "../assets/images/pet.png";
import pet2 from "../assets/images/pet2.jpg";
import pet3 from "../assets/images/pet3.jpg";

function Servicios() {
  const firstCircle = `shadow-[5px_5px_20px_5px_rgba(0,0,0,0.25)] absolute bg-gradient-157 from-[#4C0A37_25.82%] via-[#7A466A_46.56%] to-[#BAABB5_85.26%] rounded-[50%] `;
  return (
    <div id="servicios" className=" flex justify-center items-center min-h-screen w-full  bg-[#FCFBFE] m-auto">
      <div className="w-[90%] h-full mx-auto pt-[5rem] pb-[5rem] ">
        <div className="w-[80%] m-auto">
          <h3 className=" text-3xl md:text-5xl font-medium text-[#4C0A37] text-center md:text-left ">Servicios</h3>
          <p className="text-color-[#000000] text-base font-normal text-center md:text-left md:text-xl mt-3">
            Estos son los servicios que cuenta la empresa de The Walking Dog,
            los mismos pueden ir cambiando si así se amerita y/o a la necesidad
            del cliente
          </p>
        </div>
        <div className=" w-full mt-[3rem] gap-[1rem]  flex flex-row justify-center flex-wrap">
          <div className="relative  h-[400px] w-[350px]  rounded-[10px]">
            <div
              className={` h-[70px] w-[70px] md:h-[110px]  md:w-[110px] top-[-30px] left-[70px] md:top-[-30px] md:left-[20px] ${firstCircle} `}
            ></div>
            <img
              src={pet2}
              alt="dog"
              className="h-[50%] relative w-full rounded-t-[10px]"
            />
            <div
              className={`h-[70px] w-[70px] md:h-[110px]  md:w-[110px] top-[-20px] left-[-30px] md:top-[-38px] md:left-[-50px] ${firstCircle} `}
            ></div>

            <div className="h-[50%] relative p-[2rem] bg-[#0AA29F] rounded-b-[10px]">
              <div
                className={`h-[70px] w-[70px] md:h-[120px]  md:w-[120px] top-[130px] left-[-30px] md:top-[130px] md:left-[-80px] ${firstCircle} `}
              ></div>
              <span className="text-[#FFFFFF]">
                <h3 className="text-[1.4rem]">Paseo a tu mascota</h3>
                <p className="text-[0.9rem]">
                  Podes elegir un paseador cerca de tu zona y preferencia
                  horaria para pasear a tu mascota.
                </p>
              </span>
            </div>
          </div>
          <div className="relative h-[400px] w-[350px] rounded-[10px]">
            <div
              className={`h-[70px] w-[70px] md:h-[100px]  md:w-[100px] top-[320px] right-[120px] rotate-[-180deg] ${firstCircle} `}
            ></div>
            <div
              className={`h-[70px] w-[70px] md:h-[160px]  md:w-[160px] top-[280px] right-[-15px] rotate-[-180deg] ${firstCircle} `}
            ></div>
            <img
              src={pet1}
              alt="dog"
              className=" relative h-[50%] w-full rounded-t-[10px]"
            />

            <div className="relative h-[50%]  bg-[#0AA29F] p-[2rem] rounded-b-[10px]">
              <span className="text-[#FFFFFF]">
                <h3 className="text-[1.4rem]">Comodidad</h3>
                <p className="text-[0.9rem]">
                  ¿No te queda tiempo para pasear a tu mascota? ¿Te gustaría que
                  tuviera más tiempo afuera? no te preocupes, nosotros lo
                  hacemos por vos.
                </p>
              </span>
            </div>
          </div>
          <div className="relative h-[400px] w-[350px] rounded-[10px]">
            <div
              className={`h-[70px] w-[70px] md:h-[150px]  md:w-[150px] bottom-[-25px] right-[-15px] md:bottom-[-30px] md:right-[-60px] ${firstCircle} `}
            ></div>
            <img
              src={pet3}
              alt="dog"
              className="relative h-[50%] w-full rounded-t-[10px]"
            />
            <div
              className={`h-[70px] w-[70px] md:h-[120px]  md:w-[120px] top-[-20px] left-[-20px] md:top-[-40px] md:left-[-70px] ${firstCircle} `}
            ></div>
            <div
              className={`h-[80px] w-[80px] md:h-[150px]  md:w-[150px] top-[-20px] right-[-15px] md:top-[-40px] md:right-[-60px] ${firstCircle} `}
            ></div>
            <div className="relative h-[50%]  p-[2rem] bg-[#0AA29F] rounded-b-[10px]">
              <span className="text-[#FFFFFF]">
                <h3 className="text-[1.4rem]">Confianza</h3>
                <p className="text-[0.9rem]">
                  En el perfil de cada paseador se pueden leer reviews y
                  calificaciones que han hecho diferentes usuarios, para que
                  puedas elegir la persona que más confianza te brinde.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;