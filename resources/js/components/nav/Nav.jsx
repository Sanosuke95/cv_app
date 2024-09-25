import { Link } from "react-router-dom";
import Divider from "../divider/Divider";
const Nav = ({ isLogged }) => {
    return NavLoggedIn();
}

const NavLoggedIn = () => {
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

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle"></i>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                <Divider />
                                <li><Link className="dropdown-item" to="/register">Register</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;