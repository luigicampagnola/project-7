import React from "react";
import { Form } from "react-bootstrap";

const Name = ({ onNameChange }) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control onChange={onNameChange} type="Name"></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Name;
