import React from "react";
import { Col, Row } from "react-bootstrap";
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
    this.state = {};
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <div className="reg-form">
              <Title />
              <Name />
              <Email />
              <Password />
              <RegisterButton onRouteChange={onRouteChange} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Register;
