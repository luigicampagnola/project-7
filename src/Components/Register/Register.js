import React from "react";
import { Container } from "react-bootstrap";
import Email from "./Email/Email";
import Name from "./Name/Name";
import Password from "./Password/Password";
import RegisterButton from "./RegisterButton/RegisterButton";
import "./Register.css";
import Title from "./Title/Title";

const Register = ({ onRouteChange }) => {
  return (
    <div className="">
      <Container>
        <div className="form">
          <Title />
          <Name />
          <Email />
          <Password />
          <RegisterButton onRouteChange={onRouteChange} />
        </div>
      </Container>
    </div>
  );
};

export default Register;
