import React from "react";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Email from "./Email/Email";
import Password from "./Password/Password";
import "./SignIn.css";
import SignInButton from "./SignInButton/SignInButton";
import SignInTitle from "./SignInTitle/SignInTitle";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {  
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          console.log(user)
          console.log(user.id)
          console.log(user.movements)
/*           this.props.loadTransactions(transactions);
 */          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      }).catch(err => console.log('error'))
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <div className="signin">
              <SignInTitle />
              <Email onEmailChange={this.onEmailChange} />
              <Password onPasswordChange={this.onPasswordChange} />
              <SignInButton onSubmitSignIn={this.onSubmitSignIn} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignIn;
