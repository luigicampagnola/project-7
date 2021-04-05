import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Close = () => {
  return (
    <Container className="p-3">
      <h4 className="mb-3">Delete Account</h4>
      <Row>
        <Form className='p-3'>
          <Form.Row>
            <Form.Group as={Col} controlId="formGriidEmail">
              <Form.Control className="mt-2" type="email" placeholder="user" />
              <div className="App">Confirm User</div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                className="mt-2"
                type="password"
                placeholder="PIN"
              />
              <div className="App">Confirm PIN</div>
            </Form.Group>
          </Form.Row>
        </Form>
      </Row>
      <div className="App">
        <Button variant="light" className="">
          Confirm
        </Button>
      </div>
    </Container>
  );
};

export default Close;
