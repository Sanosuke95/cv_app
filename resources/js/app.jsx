import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./config/routes";

ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={router} />
);
