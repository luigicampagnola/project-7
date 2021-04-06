import Button from "react-bootstrap/Button";
import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const Signup = () => {
  return (
    <div>
      <div>
        <h1>signup</h1>
        <div>
          <Container className="sign-up p-5">
            <Form.Group
              as={Row}
              controlId="formHorizontalEmail"
              className="mb-4"
            >
              <Form.Label column sm={2}>
                User
              </Form.Label>
              <Col sm={3}>
                <Form.Control type="email" placeholder="User" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                PIN
              </Form.Label>
              <Col sm={3}>
                <Form.Control type="password" placeholder="PIN" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }} className="mt-2">
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Col>
            </Form.Group>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Signup;
