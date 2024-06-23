import { useState } from "react";
import axios from 'axios';
import AuthService from '../services/Auth.service.js';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authService = new AuthService();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password
        };
        authService.login(data).then(function (response) {
            if (response) {
                console.log(response.status);
            } else {
                console.log(response);
                setEmail(email);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>
                </label>
                <input type="submit" />
            </form>
        </>
    );
}

export default Login;