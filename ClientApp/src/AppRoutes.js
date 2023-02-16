import LogIn from "./views/LogIn";
import ForgotPassword from "./views/ForgotPassword";


const AppRoutes = [
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
