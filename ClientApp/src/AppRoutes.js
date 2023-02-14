import HomePage from "./views/HomePage";
import LogIn from "./views/LogIn";
import Contacto from "./components/Contacto";

const AppRoutes = [
  {
    index: true,
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/contacto',
    element: <Contacto />
  }
];

export default AppRoutes;
