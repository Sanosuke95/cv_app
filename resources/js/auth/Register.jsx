import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import Label from "../components/label/Label";
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Checkbox from '../components/checkbox/Checkbox';
import CardForm from '../components/card/CardForm';

import AuthService from '../services/Auth.service';


function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [active, setActive] = useState(true);

    const authService = new AuthService();
    const nav = new useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            active: 1
        }

        authService.register(data).then(function (response) {
            if (response.status == 200 && response.data != null) {
                nav('/');
            } else {
                console.log('Erreur lors de la création des utilisateurs');
            }
        }).catch(function (error) {
            console.log(error.message);
        })
    }

    const handleActive = () => {
        setActive(!active);
    }

    return (
        <Layout>
            <div className='child'>
                <CardForm title={"Register"}>
                    <Form handleSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Label className={"form-label"}>Name</Label>
                            <Input
                                type={"name"}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <Label className={"form-label"}>Email</Label>
                            <Input
                                type={"email"}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <Label className={"form-label"}>Password</Label>
                            <Input
                                type={"password"}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <Label className={"form-label"}>FirstName</Label>
                            <Input
                                type={"text"}
                                onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <Label className={"form-label"}>LastName</Label>
                            <Input
                                type={"text"}
                                onChange={(e) => setLastname(e.target.value)} />
                        </div>

                        <div className="mb-3 form-check">
                            <Checkbox
                                checked={active}
                                onChange={handleActive} />
                            <Label
                                className={"form-check-label"}
                                htmlFor={"checkbox"}>Active</Label>
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

export default Register;