import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import AuthService from "../services/Auth.service";

function Home() {
    const [color, setColor] = useState('red')
    const authService = new AuthService();

    const handleSubmit = () => {
        authService.check().then((response) => {
            console.log(response)
        }).catch(function (error) {
            localStorage.removeItem('key');
        })
    };

    const handleLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        return () => {
            console.log(localStorage.getItem('key'));
        };
    }, []);

    return (
        <>
            <Layout>
                <h1>Home Page</h1>
                <p>My color is {color}</p>
                <i className="bi bi-person-circle"></i>
                <button type='button' onClick={() => setColor('blue')}>{color}</button>
                <button type="button" onClick={handleSubmit}>Submit</button>
                <button type="button" onClick={handleLogout}>Logout</button>

            </Layout>
        </>
    )
}

export default Home;