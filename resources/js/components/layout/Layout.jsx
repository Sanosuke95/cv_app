import Nav from "../nav/Nav";

function Layout({ children }) {
    return (
        <>
            <Nav />
            <main className="container">{children}</main>
        </>
    )
}

export default Layout;