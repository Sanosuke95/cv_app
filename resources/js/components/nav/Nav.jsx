import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import Divider from "../divider/Divider";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to='/'>CV_App</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/profile'>Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown text-end">
                        <a className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                            <BsPeopleFill className="rounded-circle" alt="mdo" width="32" height="32" />
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li><Link className="dropdown-item" to="/login" >Sign in</Link></li>
                            <li><Divider /></li>
                            <li><Link className="dropdown-item" to="/register" >Sign up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;