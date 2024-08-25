import { useState } from "react";
import AuthService from '../services/Auth.service.js';
import Layout from "../components/layout/Layout.jsx";
import { useNavigate } from "react-router-dom";
import http from "../utils/http-common.js";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authService = new AuthService();
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password
        };
        authService.login(data).then(function (response) {
            if (response.status == 200) {
                console.log(response.data?.token);
                localStorage.setItem('key', response.data?.token);
                http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('key')}`
                nav('/profile');
            } else {
                console.log(response.status);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };

    return (
        <>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                        >
                        </input>
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary" />
                </form>
            </Layout>
        </>
    );
}

export default Login;