import Nav from "../nav/Nav";
import "./layout.css";

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className="container mt-5">
                <div>{children}</div>
            </div>
        </>
    )
}

export default Layout;