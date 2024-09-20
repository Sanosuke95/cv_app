import { useState } from 'react';
import Button from "../components/button/Button";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import Layout from "../components/layout/Layout";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Première validation');
        console.log(email);
        console.log(password);
    }
    return (
        <Layout>
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
        </Layout>
    );
}

export default Login;