import { useState } from "react";
import Layout from "../components/layout/Layout";
import AuthService from "../services/Auth.service";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [active, setActive] = useState(true)

    const authService = new AuthService()
    const nav = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            name: name,
            password: password,
            firstname: firstName,
            lastname: lastName,
            active: active
        }

        console.log(data)

        authService.register(data).then(function (response) {
            if (response.status == 200 && response.data != null) {
                const login = {
                    email: data.email,
                    password: data.password
                };
                authService.login(login).then(function (value) {
                    nav('/');
                })
            }
        }).catch(function (error) {
            console.log(error.message)
        })
    }

    return (
        <>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Firstname</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Lastname</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="submit"
                            className="btn btn-primary" />
                    </div>
                </form>
            </Layout>
        </>
    );
}

export default Register;