import { useState } from 'react';
import Button from "../components/button/Button";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import Layout from "../components/layout/Layout";
import CardForm from '../components/card/CardForm';
import AuthService from '../services/Auth.service';
import http from "../utils/http-common.js";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


function Login() {

    const authService = new AuthService();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState();

    const nav = new useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        };

        authService.login(data).then(function (response) {
            if (response.status == 200) {
                console.log(data);
                localStorage.setItem('key', response.data?.expire_at);
                console.log(localStorage.getItem('key'));
                console.log(response);

            } else {
                console.log(response.status)
            }
        })
    }
    return (
        <Layout>
            <div className='child'>
                <CardForm title={"login"}>
                    <Form handleSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Label className={"form-label"}>Email</Label>
                            <Input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className={"form-control"} />
                        </div>
                        <div className="mb-3">
                            <Label className={"form-label"}>Password</Label>
                            <Input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className={"form-control"} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Button type={"submit"} className={"btn btn-primary"}>Submit</Button>
                        </div>
                    </Form>
                </CardForm>
            </div>
        </Layout>
    );
}

export default Login;