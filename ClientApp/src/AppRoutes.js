import LogIn from "./views/LogIn";
import ForgotPassword from "./views/ForgotPassword";
import Contacto from "./components/Contacto";
import HomePage from "./views/HomePage";
import Servicios from "./components/Servicios";
import { Paseadores } from "./components/Paseadores";
import Register from "./views/Register";
import { ProfilePaseadores } from "./components/ProfilePaseadores";


const AppRoutes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LogIn />
    },
    {
        path: '/Register',
        element: <Register />
    },
    {
        path: '/ForgotPassword',
        element: <ForgotPassword />
    },
    {
        path: '/paseadores/:direccion',
        element: <Paseadores />
    },
    {
        path: '/perfilPaseador/:id',
        element: <ProfilePaseadores />
    }        
];
export default AppRoutes;
