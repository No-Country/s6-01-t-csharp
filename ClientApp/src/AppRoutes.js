import HomePage from "./views/HomePage";
import LogIn from "./views/LogIn";
import Contacto from "./components/Contacto";
import Servicios from "./components/Servicios";
import ForgotPassword from "./views/ForgotPassword";

const AppRoutes = [
  // {
  //   index: true,
  //   element: <HomePage />
  // },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/ForgotPassword',
    element: <ForgotPassword />
  },
  {
    path: '/Servicios',
    element: <Servicios />
  }
];

export default AppRoutes;
