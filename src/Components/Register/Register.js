import React from "react";
import Email from "./Email/Email";
import Name from "./Name/Name";
import Password from "./Password/Password";
import RegisterButton from "./RegisterButton/RegisterButton";
import "./Register.css";
import Title from "./Title/Title";
import { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerEmail: "",
      registerPassword: "",
      registerName: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.registerEmail,
        password: this.state.registerPassword,
        name: this.state.registerName,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div className="App-reg">
        <div className="reg-form">
          <Title />
          <Name onNameChange={this.onNameChange} />
          <Email onEmailChange={this.onEmailChange} />
          <Password onPasswordChange={this.onPasswordChange} />
          <RegisterButton onSubmitRegister={this.onSubmitRegister} />
        </div>
      </div>
    );
  }
}

export default Register;
