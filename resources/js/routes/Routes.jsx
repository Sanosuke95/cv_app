import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../auth/Login';
import Profile from '../pages/Profile';
import Register from '../auth/Register';
import Nav from '../components/nav/Nav';


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/profile",
            element: <Profile />
        }
    ]);
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Router;