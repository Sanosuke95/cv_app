import React from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Login from "../pages/authentication/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;
