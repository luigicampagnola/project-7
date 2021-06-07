import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import DeleteButton from "./Button/Button";


const DeleteComponent = ({ deleteClickHandler, deleteInputHandler }) => {
  return (
    <Container className="p-3">
      <div className="mb-3 ml-3 component-title">Delete Account</div>
      <Row className='ml-2'>
        <Form className='p-2'>
          <Form.Row>
            <Form.Group as={Col} controlId="formGriidEmail2">
              <Form.Control className="mt-2" size='sm' type="email" placeholder="User" onChange={deleteInputHandler}/>
              <div className="App">Confirm User</div>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword2">
              <Form.Control
                size='sm'
                className="mt-2"
                type="password"
                placeholder="Password"
                onChange={deleteInputHandler}
              />
              <div className="App">Confirm Password</div>
            </Form.Group>
          </Form.Row>
        </Form>
      </Row>
      <div className="App">
        <DeleteButton deleteClickHandler={deleteClickHandler}/>
      </div>
    </Container>
  );
};

export default DeleteComponent;
