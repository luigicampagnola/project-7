import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Text>Log in to get started</Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">Personal Wallet</Navbar.Brand>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGriidEmail">
                <Form.Control
                  className="mt-2"
                  type="email"
                  placeholder="user"
                  size='sm'
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  className="mt-2"
                  type="password"
                  placeholder="PIN"
                  size='sm'
                />
              </Form.Group>
            </Form.Row>
          </Form>
          <Button variant="light" className="ml-3 mb-2 mr-2" size="sm">
            &rarr;
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
