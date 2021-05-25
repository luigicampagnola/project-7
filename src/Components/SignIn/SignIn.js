import React from "react";
import { Col, Row } from "react-bootstrap";
import Email from "./Email/Email";
import Password from "./Password/Password";
import "./SignIn.css";
import SignInButton from "./SignInButton/SignInButton";
import SignInTitle from "./SignInTitle/SignInTitle";

const SignIn = ({ onRouteChange }) => {
  return (
    <div>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <div className="signin">
            <SignInTitle />
            <Email />
            <Password />
            <SignInButton onRouteChange={onRouteChange} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
