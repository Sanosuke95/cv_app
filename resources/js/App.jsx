import * as React from 'react';
import * as ReactDOM from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);