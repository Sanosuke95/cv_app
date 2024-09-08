import { createBrowserRouter } from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

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
    }
  ]);

  export default router;