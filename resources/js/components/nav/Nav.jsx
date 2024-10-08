import { Link } from "react-router-dom";
import { useEffect } from "react";
import LoggedIn from "./LoggedIn";
import Storage from "../../services/Storage.service";
import LoggedOut from "./LoggedOut";

const Nav = () => {
    const storage = new Storage();
    let isLogged = false;
    useEffect(() => {
        return () => {
            const token = storage.get('token');
            console.log(token);
            if (token !== null) {
                isLogged = true;
            }
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">CV_App</Link>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {isLogged ? <LoggedOut /> : <LoggedIn />}
                </div>
            </div>
        </nav>
    );
}

export default Nav;