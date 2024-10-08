import { createBrowserRouter } from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from "../auth/Login";
import Register from "../auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router;