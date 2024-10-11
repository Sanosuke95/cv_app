import Button from "../components/button/Button";
import Layout from "../components/layout/Layout";
import AuthService from "../services/Auth.service";

function Home() {

    const authService = new AuthService();
    const handleSubmit = () => {
        console.log('Boutton de test');
        authService.profile().then(function (response) {
            console.log(response);
        })
    }

    return (
        <Layout>
            <h1>Home Page</h1>
            <Button onClick={handleSubmit} className={"btn btn-primary"}>Profile</Button>
        </Layout>
    )
}

export default Home;