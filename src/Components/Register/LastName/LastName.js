import React from "react";
import { Form } from "react-bootstrap";

const LastName = ({ onNameChange }) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={onNameChange} type="Last Name"></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LastName;
