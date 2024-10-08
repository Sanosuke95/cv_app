import Storage from "../../services/Storage.service";
import Button from "../button/Button";
import Divider from "../divider/Divider";
import { Link } from "react-router-dom";

const LoggedIn = () => {
    const storage = new Storage();
    return (
        <ul className="navbar-nav" >
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-circle"></i>
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="">New project...</Link></li>
                    <li><Link className="dropdown-item" to="">Profile</Link></li>
                    <li><Link className="dropdown-item" to="">Settings</Link></li>
                    <Divider />
                    <li><Button className="dropdown-item" onClick={storage.delete}>Log out</Button></li>
                </ul>
            </li>
        </ul >
    );
}

export default LoggedIn;