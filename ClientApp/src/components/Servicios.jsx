import React from "react";
import pet1 from "../assets/images/pet.png";
import pet2 from "../assets/images/pet2.jpg";
import pet3 from "../assets/images/pet3.jpg";

function Servicios() {
  const firstCircle = `shadow-[5px_5px_20px_5px_rgba(0,0,0,0.25)] absolute bg-gradient-157 from-[#4C0A37_25.82%] via-[#7A466A_46.56%] to-[#BAABB5_85.26%] rounded-[50%] `;
  return (
    <div id="servicios" className="h-screen w-full  bg-[#FCFBFE]">
      <div className="w-[90%]  m-auto pt-[5rem] pb-8 ">
        <div className="w-full">
          <h1 className="text-[1.8rem] text-[#4C0A37] ">Servicios</h1>
          <p className="text-color-[#000000]">
            Estos son los servicios que cuenta la empresa de The Walking Dog,
            los mismos pueden ir cambiando si así se amerita y/o a la necesidad
            del cliente
          </p>
        </div>
        <div className=" w-full mt-[3rem] gap-[1rem]  flex flex-row justify-center flex-wrap">
          <div className="relative  h-[400px] w-[350px]  rounded-[10px]">
            <div
              className={`h-[110px]  w-[110px] top-[-30px] left-[20px] ${firstCircle} `}
            ></div>
            <img
              src={pet2}
              alt="dog"
              className="h-[50%] relative w-full rounded-t-[10px]"
            />
            <div
              className={`h-[110px]  w-[110px] top-[-38px] left-[-50px] ${firstCircle} `}
            ></div>

            <div className="h-[50%] relative p-[2rem] bg-[#0AA29F] rounded-b-[10px]">
              <div
                className={`h-[120px]  w-[120px] top-[130px] left-[-80px] ${firstCircle} `}
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
              className={`h-[100px]  w-[100px] top-[320px] right-[120px] rotate-[-180deg] ${firstCircle} `}
            ></div>
            <div
              className={`h-[160px]  w-[160px] top-[280px] right-[-15px] rotate-[-180deg] ${firstCircle} `}
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
              className={`h-[150px]  w-[150px] bottom-[-30px] right-[-60px] ${firstCircle} `}
            ></div>
            <img
              src={pet3}
              alt="dog"
              className="relative h-[50%] w-full rounded-t-[10px]"
            />
            <div
              className={`h-[120px]  w-[120px] top-[-40px] left-[-70px] ${firstCircle} `}
            ></div>
            <div
              className={`h-[150px]  w-[150px] top-[-40px] right-[-60px] ${firstCircle} `}
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