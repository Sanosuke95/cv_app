import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';


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
            path: "/profile",
            element: <Profile />
        }
    ]);
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Router;