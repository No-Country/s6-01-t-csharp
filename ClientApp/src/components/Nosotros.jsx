import mascota from "../assets/images/img_perro_nosotros.png";
import fondo from "../assets/images/Rectangle 29.png";

const style = {
    nosotros: "min-h-full w-full  relative pt-[5rem] pb-[5rem]",
    wrapper: "h-full mx-auto px-10 flex flex-col md:flex-row items-center justify-between w-full sm:w-[90%]  ",
    container: " w-90% md:w-1/2 h-[90%] px-4 mb-10",
    wrapper_img: "flex justify-center",
    wrapper_text: "flex justify-center flex-col justify-center",
    imagen: "h-[90%] w-[100%]",
    h2: "text-center text-3xl md:text-5xl font-medium text-secondary mb-4",
    p: "text-lg my-4",
    btn_pregunta: "w-[100%] md:w-[430px] bg-primary h-[61px] w-60 rounded-lg text-textLight text-xl mt-10",
    img_fondo: "object-cover w-full h-1/2 -z-50 absolute bottom-0 mx-auto"

}

function Nosotros() {

    return (<>
        <section id='nosotros' className={ style.nosotros }>
            <div className={ style.wrapper }>

                <div className={ `${style.container} ${style.wrapper_text}` }>
                    <h2 className={ style.h2 }>Sobre Nosotros</h2>
                    <p className={ style.p }>
                        Sobre Nosotros
                        Somos una empresa que nace con el objetivo de poder brindarle ese espacio de recreación que las mascotas necesitan. Entendemos que muchas veces los dueños no poseen el tiempo para hacerlo y queremos brindar una solución a dicho problema.
                    </p>
                    <p className={ style.p }>
                        Nuestra empresa funciona como un medio, es decir, cualquier persona puede postularse como vendedor, sin embargo habrá una barra de calificaciones y reviews que permitiría ver la confianza del sujeto.
                        Estamos para brindarle a tu mascota lo mejor.
                    </p>
                    <button className= { style.btn_pregunta }>¡Haz una pregunta!</button>
                </div>

                <div className="w-[100%] md:w-1/2 h-[90%] md:px-4 mb-10 flex justify-center"> 
                    <img
                        className= { style.imagen }
                        src={ mascota } 
                        alt="Perro de raza labarador siendo paseado gracias a la aplicación web The Walking Dog" />
                </div>

            </div>
            <img className={ style.img_fondo } src={ fondo } alt="" />
        </section>
    </>)
}

export default Nosotros;