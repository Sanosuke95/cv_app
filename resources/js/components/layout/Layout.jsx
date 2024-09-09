import Nav from "../nav/Nav";

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className="container">
                <div>{children}</div>
            </div>
        </>
    )
}

export default Layout;