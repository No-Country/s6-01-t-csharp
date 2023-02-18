import LogIn from "./views/LogIn";
import ForgotPassword from "./views/ForgotPassword";
import { Paseadores } from "./components/Paseadores";
import HomePage from "./views/HomePage";
import Register from "./views/Register";

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
        path: '/paseadores/:id',
        element: <Paseadores />
    },
    
];

export default AppRoutes;
