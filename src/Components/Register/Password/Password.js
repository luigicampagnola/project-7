import React from "react";
import { Form } from "react-bootstrap";

const Password = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password"></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Password;