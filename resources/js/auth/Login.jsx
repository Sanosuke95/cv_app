import Button from "../components/button/Button";
import Form from "../components/form/Form";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import Layout from "../components/layout/Layout";

function Login() {
    const handleSubmit = () => {
        console.log('Première validation');
        alert('Première validation');
    }
    return (
        <Layout>
            <Form handleSubmit={handleSubmit}>
                <div className="mb-3">
                    <Label>Email</Label>
                    <Input type="email" />
                </div>
                <div className="mb-3">
                    <Label>Password</Label>
                    <Input type="password" />
                </div>
                <Button type={"submit"} className={"btn btn-primary"}>Submit</Button>
            </Form>
        </Layout>
    );
}

export default Login;