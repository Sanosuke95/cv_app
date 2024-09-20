import { useState } from 'react';
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import Label from "../components/label/Label";
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import Checkbox from '../components/checkbox/Checkbox';


function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [active, setActive] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(firstname);
        console.log(lastname);
        console.log(active);
    }

    const handleActive = () => {
        setActive(!active);
    }

    return (
        <div>
            <Layout>
                <h1>Register page</h1>
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
            </Layout>
        </div>
    );
}

export default Register;