import LogIn from "./views/LogIn";
import ForgotPassword from "./views/ForgotPassword";
import { Paseadores } from "./components/Paseadores";
import HomePage from "./views/HomePage";


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
        path: '/ForgotPassword',
        element: <ForgotPassword />
    },
    {
        path: '/paseadores/:id',
        element: <Paseadores />
    },
    
];

export default AppRoutes;
