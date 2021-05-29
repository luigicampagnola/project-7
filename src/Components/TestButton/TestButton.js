import Button from 'react-bootstrap/Button';
import React from "react";

const TestButtom = ({ testClickHandler }) => {
  return (
    <div>
      <Button onClick={testClickHandler}>Test</Button>
    </div>
  );
};

export default TestButtom;
