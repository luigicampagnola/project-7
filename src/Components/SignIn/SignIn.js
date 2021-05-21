import React from "react";
import { Container } from "react-bootstrap";
import Email from "./Email/Email";
import Password from "./Password/Password";
import "./SignIn.css";
import SignInButton from "./SignInButton/SignInButton";
import SignInTitle from "./SignInTitle/SignInTitle";

const SignIn = ({ onRouteChange }) => {
  return (
    <div>
      <Container>
        <div className="signin">
          <SignInTitle />
          <Email />
          <Password />
          <SignInButton onRouteChange={onRouteChange}/>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
