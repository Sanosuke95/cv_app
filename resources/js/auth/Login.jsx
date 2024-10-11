import { useState } from 'react';
import Button from "../components/button/Button";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import Layout from "../components/layout/Layout";
import CardForm from '../components/card/CardForm';
import AuthService from '../services/Auth.service';
import { useNavigate } from 'react-router-dom';
import Storage from '../services/Storage.service.js';
import http from "../utils/http-common.js";


function Login() {

    const authService = new AuthService();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState();

    const nav = new useNavigate();
    const storage = new Storage();
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        };

        authService.login(data).then(function (response) {
            if (response.status == 200) {
                storage.delete();
                http.defaults.headers.common['Authorization'] = '';
                storage.add('token', response.data?.token);
                storage.add('expireAt', response.data?.expire_at);
                http.defaults.headers.common['Authorization'] = `Bearer ${response.data?.token}`;
                nav('/');
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