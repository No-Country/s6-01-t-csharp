import LogIn from "./views/LogIn";
import Contacto from "./components/Contacto";
import Servicios from "./components/Servicios";
import ForgotPassword from "./views/ForgotPassword";
import Nosotros from "./views/Nosotros";
import Home from "./components/Home";

const AppRoutes = [
  {
    path: '/Home',
    element: <Home />
  },
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
  },
  {
    path: '/Nosotros',
    element: <Nosotros />
  }
];

export default AppRoutes;
