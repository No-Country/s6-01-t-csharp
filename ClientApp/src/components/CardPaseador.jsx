import start from "../assets/images/Star.png";
import { useParams } from "react-router-dom";

export const CardPaseador = ( { img, preferencias, nombre , texto}) => {

  const {direccion} = useParams()

  const style = {
    card: "w-[100%]  h-[177px] my-6 rounded-lg p-[10px] md:p-[15px] shadow-2xl bg-bgCard",
    flex: "flex  justify-center items-center gap-3",
    img: "h-[100px] md:h-full rounded-lg",
    texto: "w-[90%] ",
    start: "h-[.9rem]",
    wrapper_stars:"flex",
    preferencias: "text-[.75rem] text-[#176C6D]",
    nombre: "font-medium text-[1.2rem] ",
    descripcion:"text-[.9rem]"
  }

  return (<>
    <div className= { `${style.card} ${style.flex}` } >
      <img 
        className={ style.img }
        src={ img } 
        alt="Paseador de perros de The Walking Dog" />
      
      <div className={ style.texto } >
        <div className={ style.wrapper_stars }>
          <img
            className={ style.start }
            src={ start } 
            alt="Calificación del paseador" />
            <img
            className={ style.start }
            src={ start } 
            alt="Calificación del paseador" />
            <img
            className={ style.start }
            src={ start } 
            alt="Calificación del paseador" />
            <img
            className={ style.start }
            src={ start } 
            alt="Calificación del paseador" />
            <img
            className={ style.start }
            src={ start } 
            alt="Calificación del paseador" />
        </div>

        <p className= { style.preferencias } >Preferencias: { preferencias }</p>

        <p className= { style.nombre }>{ nombre }</p>

        <p className= { style.descripcion }> { `${texto.split(" ").slice(0, 15).join(" ")}...` }</p>
      </div>
    </div>

    
    
  </>)
}
