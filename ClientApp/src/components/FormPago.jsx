import Nav from "./Nav"

const styles = {
    wrapper:"w-full min-h-[100vh] pt-[10vh]",
    form: "w-[90%] lg:w-1/2 min-h-full mx-auto flex flex-col mt-10 py-12 items-center rounded-lg shadow-2xl bg-bgCard",
    wrapper_text:"flex flex-col w-[80%] md:w-[50%] my-3",
    input:"h-8 px-2 rounded border-2 border-alterno focus:border-primary focus:outline-none",
    bnt_pagar:"bg-primary  py-2 px-4 rounded-lg text-white text-xl hover:bg-secondary transition-all duration-300 ease-in-out"
}

export const FormPago = () => {


    return (<>
        <Nav/>
        <section className={`${styles.wrapper}`}>
            <form className={`${styles.form}`} action="">
                <h5 className='text-2xl font-medium'>Realizar pago</h5>

                <div className={`${styles.wrapper_text}`}>
                    <p className="text-lg font-medium">Total: $30</p>
                </div>
                <div className={`${styles.wrapper_text}`}>
                    <label className='mb-1' >Número de la tarjeta *</label>
                    <input
                        className={`${styles.input}`} 
                        name="nombre" 
                        id="nombre" 
                        type="text"
                        autoComplete='off'
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                </div>

                <div className={`${styles.wrapper_text}`}>
                    <label className='mb-1' >Fecha de vencimiento *</label>
                    <input
                        className={`${styles.input}`} 
                        name="nombre" 
                        id="nombre" 
                        type="text"
                        autoComplete='off'
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                </div>

                <div className={`${styles.wrapper_text}`}>
                    <label className='mb-1' >Ultimos 3 dígitos *</label>
                    <input
                        className={`${styles.input}`} 
                        name="nombre" 
                        id="nombre" 
                        type="text"
                        autoComplete='off'
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                </div>

                <div className={`${styles.wrapper_text}`}>
                    <button className={`${styles.bnt_pagar}`}>
                        Pagar
                    </button>
                </div>
            </form>
        </section>
        
    </>)
}
