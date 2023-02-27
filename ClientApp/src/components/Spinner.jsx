import spinner from "../assets/icons/Ellipse 28.png";

export const Spinner = ({texto}) => {


    return (<>
        <div className="h-full w-full flex justify-evenly flex-col items-center  ">
            <p className="text-2xl font-medium">Cargando</p>
            <div className="w-20 h-20 lg:w-25 lg:h-25 ">
                <img 
                    className=" rounded-full animate-spin" 
                    src= { spinner }
                    alt="Spinner" />
            </div>
            <p className="text-base lg:text-lg  font-medium max-w-[300px] mx-auto text-center">
                { texto }
            </p>
        </div>
    </>)
}
