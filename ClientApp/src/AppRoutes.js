import LogIn from "./views/LogIn";
import ForgotPassword from "./views/ForgotPassword";
import Contacto from "./components/Contacto";
import HomePage from "./views/HomePage";
import Servicios from "./components/Servicios";


const AppRoutes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/servicios',
        element: <Servicios />
    },
    {
        path: '/login',
        element: <LogIn />
    },
    {
        path: '/ForgotPassword',
        element: <ForgotPassword />
    },    
];

export default AppRoutes;
