const style = {
    a: "text-textLight text-xl ",
}

export const EnlacesNav = ( { index, className, onClick } ) => {

    const agregarTitulo = (id, val1, val2, val3, val4, val5) => {
        
        switch (id) {
            case 0:{
                let titulo = val1;
                return titulo;
                }
            case 1:{
                let titulo = val2;
                return titulo;
            }
            case 2:{
                let titulo = val3;
                return titulo;
            }
            case 3:{
                let titulo = val4;
                return titulo;
            }
            case 4:{
                let titulo = val5;
                return titulo;
            }
            default:{ 
                let titulo = " ";
                return titulo;
            }
        }
    }


    return(<>
        <li className= { className }>
            <a 
                className={ style.a } 
                href={ agregarTitulo(index, "#", "#servicios", "#nosotros","#faqs" ,"#contacto") }
                onClick={ onClick }>
                    { agregarTitulo(index, "Home", "Servicios", "Nosotros", "FAQs","Contacto") }
                </a>
        </li>
    </>)
}