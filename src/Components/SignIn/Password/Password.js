import React from "react";
import { Form } from "react-bootstrap";

const Password = ({ onPasswordChange }) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={onPasswordChange} type="Password" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Password;
