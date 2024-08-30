import Nav from "../nav/Nav";
import React from 'react'
import { useState } from 'react';

function Layout({ children }) {
    const [isLogged, setIsLogged] = useState('')
    return (
        <>
            <Nav />
            <main className="container">{children}</main>
        </>
    )
}

export default Layout;