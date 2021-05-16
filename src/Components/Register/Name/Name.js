import React from "react";
import { Form } from "react-bootstrap";

const Name = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name"></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Name;
