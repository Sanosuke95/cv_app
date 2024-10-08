import Divider from "../divider/Divider";
import { Link } from "react-router-dom";

const LoggedOut = () => {
    return (
        <ul className="navbar-nav" >
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
        </ul >
    );

}

export default LoggedOut;