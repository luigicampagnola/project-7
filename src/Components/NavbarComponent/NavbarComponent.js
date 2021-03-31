import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Text>Log in to get started</Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">BankApp</Navbar.Brand>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGriidEmail">
                <Form.Control type="email" placeholder="user" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="PIN" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
