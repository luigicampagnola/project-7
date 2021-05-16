import React from "react";
import { Form } from "react-bootstrap";

const Email = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Email;
