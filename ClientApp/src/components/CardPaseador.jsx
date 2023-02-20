import start from "../assets/images/Star.png";

export const CardPaseador = ( { img, preferencias, nombre , texto}) => {

  const style = {
    card: "mx-auto w-[90%]  h-[130px] my-6 rounded-lg py-[10px] px-[12px] shadow-2xl bg-bgCard",
    flex: "flex  gap-3",
    img: "h-full ",
    texto: "w-[80%] ",
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

        <p className= { style.descripcion }> { texto }</p>
      </div>
    </div>

    
    
  </>)
}
