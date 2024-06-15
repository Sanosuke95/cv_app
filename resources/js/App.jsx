import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import Router from './routes/Routes';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);