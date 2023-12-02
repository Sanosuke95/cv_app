import React, { Component } from "react";
import Layout from "../../../component/layout/Layout";
import Button from "../../../component/common/button/Button";
import Label from "../../../component/common/label/Label";
import Input from "../../../component/common/input/Input";
import Card from "../../../component/common/card/Card";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            email: event.target.email,
            password: event.target.password,
        });
    }

    handleSubmit(event) {
        console.log(this.state.email);
        console.log(this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Layout>
                    <div className="p-5">
                        <Card title="Login">
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <Label forInput="emailInput">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="emailInput"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    ></Input>
                                </div>
                                <div className="mb-3">
                                    <Label forInput="passwordInput">
                                        Password
                                    </Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="passwordInput"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    ></Input>
                                </div>
                                <Button className="btn-primary" type="submit">
                                    Submit
                                </Button>
                            </form>
                        </Card>
                    </div>
                </Layout>
            </>
        );
    }
}

export default Login;
