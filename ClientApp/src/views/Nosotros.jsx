import mascota from "../assets/images/img_perro_nosotros.png";
import fondo from "../assets/images/Rectangle 29.png";

const style = {
    nosotros: "h-[90vh] w-full  relative",
    wrapper: "h-full mx-auto px-10 flex items-center justify-between w-[90%] max-w-screen-2xl  ",
    container: "w-1/2 h-[90%] px-4 ",
    wrapper_img: "flex justify-center",
    wrapper_text: "flex justify-center flex-col justify-center",
    imagen: "h-[100%]",
    h2: "text-5xl font-medium text-secondary mb-4",
    p: "text-lg my-4",
    btn_pregunta: "bg-primary  w-60 py-2 px-4 rounded-lg text-textLight text-xl mt-10",
    img_fondo: "w-full h-1/2 -z-50 absolute bottom-0 mx-auto"

}

export const Nosotros = () => {

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

                <div className={ `${style.container} ${ style.wrapper_img }` }> 
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
