import { Link } from "react-router-dom";
const Nav = ({ isLogged }) => {
    return NavLoggedIn();
}

const NavLoggedIn = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
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
                </div>
            </div>
        </nav>

    );
}

export default Nav;