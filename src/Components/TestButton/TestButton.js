import Button from 'react-bootstrap/Button';
import React from "react";

const TestButtom = ({ testButtonHandler }) => {
  return (
    <div>
      <Button onClick={testButtonHandler}>Test</Button>
    </div>
  );
};

export default TestButtom;
