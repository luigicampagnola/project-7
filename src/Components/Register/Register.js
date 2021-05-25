import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Email from "./Email/Email";
import Name from "./Name/Name";
import Password from "./Password/Password";
import RegisterButton from "./RegisterButton/RegisterButton";
import "./Register.css";
import Title from "./Title/Title";

const Register = ({ onRouteChange }) => {
  return (
    <div>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <Form className="form">
            <Title />
            <Name />
            <Email />
            <Password />
            <RegisterButton onRouteChange={onRouteChange} />
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
