import LogIn from "./views/LogIn";
import ForgotPassword from "./views/ForgotPassword";
import Contacto from "./components/Contacto";
import HomePage from "./views/HomePage";
import Servicios from "./components/Servicios";
import { Paseadores } from "./components/Paseadores";
import Register from "./views/Register";
import { PagosContainer } from "./views/PagosContainer";
import { ProfilePaseadores } from "./components/ProfilePaseadores";
import RequestWalker from "./components/RequestWalker";



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
        path: '/pagos',
        element: <PagosContainer />
    },
    {
        path: '/perfilPaseador/:id',
        element: <ProfilePaseadores />
    },
    {
        path: '/SolicitudPaseadores',
        element: <RequestWalker />
    }
];
export default AppRoutes;
