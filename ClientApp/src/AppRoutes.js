import LogIn from "./views/LogIn";
import ForgotPassword from "./views/ForgotPassword";
import Register from "./views/Register";


const AppRoutes = [
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
    
];

export default AppRoutes;
