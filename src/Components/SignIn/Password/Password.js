import React from "react";
import { Form } from "react-bootstrap";

const Password = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Password;
