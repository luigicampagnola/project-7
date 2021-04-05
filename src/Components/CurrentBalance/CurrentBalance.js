import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const CurrentBalance = () => {
  return (
    <div>
      <Row>
        <Col sm={5}>
          <h3>Current Balance</h3>
        </Col>
        <Col className='mb-3'>
            <h2>$21,344.33</h2>
        </Col>
      </Row>
    </div>
  );
};

export default CurrentBalance;
