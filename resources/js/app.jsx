import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./config/routes";

ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={router} />
);
